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
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const handleVideoLoad = (videoKey: string) => {
    setVideosLoaded(prev => new Set(prev).add(videoKey));
  };

  // Simplified touch handlers
  const handleTouchStart = () => {
    setIsUserInteracting(true);
  };

  const handleTouchEnd = () => {
    setIsUserInteracting(false);
  };

  // Simplified auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;

    const animate = () => {
      if (scrollContainer && !isUserInteracting) {
        scrollContainer.scrollLeft += speed / 60;
        
        // Reset when reaching end of first set
        const maxScroll = scrollContainer.scrollWidth / 3;
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [speed, isUserInteracting]);

  // Get media for this project
  const projectSlug = getProjectSlug(work.id);
  const projectMedia = getProjectMedia(projectSlug);
  
  // Use real carousel videos or fallback
  const carouselVideos = projectMedia?.carousel || work.videos.map(v => v.thumbnail);
  
  // Triple the videos for seamless loop
  const tripleVideos = [
    ...carouselVideos,
    ...carouselVideos,
    ...carouselVideos
  ];

  return (
    <div className="mb-[120px]">
      {/* Scrolling videos */}
      <div className="overflow-hidden mb-8">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden px-[15px]"
          style={{ scrollBehavior: 'auto' }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {tripleVideos.map((videoSrc, index) => {
            const videoKey = `${work.id}-${index}`;
            const isLoaded = videosLoaded.has(videoKey);
            
            return (
              <div 
                key={videoKey}
                className="flex-shrink-0 w-[312px] md:w-[480px] h-[312px] md:h-[480px]"
              >
                <div className="relative w-full h-full bg-gray-900 overflow-hidden">
                  <div className={`absolute inset-0 transition-opacity duration-700 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <video
                      src={videoSrc}
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      onLoadedData={() => handleVideoLoad(videoKey)}
                      onError={() => console.error('Video failed to load:', videoSrc)}
                    />
                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project info */}
      <div className="px-[15px]">
        <div className="flex justify-between">
          {/* Left column - Project info */}
          <div className="space-y-1">
            <div className="text-sm text-gray-500">Project</div>
            <h2 className="typography-h4 text-black">{work.title}</h2>
            {work.client && (
              <p className="text-gray-600 text-sm">by {work.client}</p>
            )}
          </div>
          
          {/* Right column - Description and actions */}
          <div className="flex flex-col items-end space-y-4 max-w-md pt-24 md:pt-8">
            <p className="text-gray-600 text-sm text-right">
              {work.description}
            </p>
            
            {work.id === 11 && (
              <div className="text-gray-400 text-xs">
                100% AI-made.
              </div>
            )}
            
            <button 
              onClick={() => onNavigate?.('project', work.id)}
              className="typography-text-link text-gray-700 hover:text-black transition-colors flex items-center gap-1"
            >
              See Project 
              <span className="text-xs">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}