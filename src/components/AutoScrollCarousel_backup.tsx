import { useEffect, useRef, useState } from 'react';
import { getProjectMedia, getProjectSlug } from '../config/mediaConfig';

interface Video {
  id: number;
  thumbnail: string;
  title?: string;
  description?: string;
}

interface Work {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  client?: string;
  videos: Video[];
}

interface AutoScrollCarouselProps {
  work: Work;
  speed?: number;
  onNavigate?: (page: string, projectId?: number) => void;
}

export default function AutoScrollCarousel({ work, speed = 10, onNavigate }: AutoScrollCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [videosLoaded, setVideosLoaded] = useState<Set<string>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  const handleVideoLoad = (videoKey: string) => {
    setVideosLoaded(prev => new Set(prev).add(videoKey));
  };

  // Screen size detection
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition += speed / 60;
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => animationId && cancelAnimationFrame(animationId);
  }, [speed]);

  // Get media for project
  const projectSlug = getProjectSlug(work.id);
  const projectMedia = getProjectMedia(projectSlug);
  
  // Select appropriate media based on screen size
  const carouselVideos = isMobile 
    ? (projectMedia?.carouselMobile || projectMedia?.carousel || work.videos.map(v => v.thumbnail))
    : (projectMedia?.carouselDesktop || projectMedia?.carousel || work.videos.map(v => v.thumbnail));
  
  // Triple videos for seamless loop
  const tripleVideos = [...carouselVideos, ...carouselVideos, ...carouselVideos];

  return (
    <div className="mb-[120px]">
      <div className="overflow-hidden mb-8">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden px-[15px]"
          style={{ scrollBehavior: 'auto' }}
        >
          {tripleVideos.map((videoSrc, index) => {
            const videoKey = `${work.id}-${index}`;
            const isLoaded = videosLoaded.has(videoKey);
            const isImage = videoSrc.endsWith('.jpg') || videoSrc.endsWith('.jpeg') || videoSrc.endsWith('.png');
            
            return (
              <div 
                key={videoKey}
                className={`flex-shrink-0 ${isMobile ? 'w-[360px]' : 'w-[720px]'}`}
              >
                <div className="relative aspect-square bg-gray-900 overflow-hidden">
                  <div className={`transition-opacity duration-700 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    {isImage ? (
                      <img
                        src={videoSrc}
                        className="w-full h-full object-cover"
                        onLoad={() => handleVideoLoad(videoKey)}
                        onError={() => console.error('Image failed to load:', videoSrc)}
                        alt=""
                      />
                    ) : (
                      <video
                        src={videoSrc}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        onLoadedData={() => handleVideoLoad(videoKey)}
                        onError={() => console.error('Video failed to load:', videoSrc)}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-[15px]">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="text-sm text-gray-500">Project</div>
            <h2 className="typography-h4 text-black">{work.title}</h2>
            {work.client && <p className="text-gray-600 text-sm">by {work.client}</p>}
            <p className="text-gray-600 text-sm">{work.category}</p>
          </div>
          
          <div className="flex flex-col items-end space-y-4 max-w-md">
            <p className="text-gray-600 text-sm text-right">{work.description}</p>
            {work.id === 11 && (
              <div className="text-gray-400 text-xs">100% AI-made.</div>
            )}
            <button 
              onClick={() => onNavigate?.('project', work.id)}
              className="typography-text-link text-gray-700 hover:text-black transition-colors flex items-center gap-1"
            >
              See Project <span className="text-xs">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
