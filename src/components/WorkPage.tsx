import { useState, useRef, useEffect } from 'react';
import { Button } from "./ui/button";
import AutoScrollCarousel from './AutoScrollCarousel';

const categories = ['all', 'commercial', 'fashion', 'film', 'animation', 'documentary'];

// Mock data with different thumbnail images for each video
const mockWorks = [
  {
    id: 1,
    title: "Grand Soir",
    category: "commercial",
    year: "2024",
    description: "A spec film crafted entirely with artificial intelligence.",
    client: "Maison Francis Kurkdjian",
    videos: [
      { 
        id: 1, 
        thumbnail: "https://images.unsplash.com/photo-1680503504148-25f2d178ff05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9kdWN0fGVufDF8fHx8MTc1NTc4NDI2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Opening Scene",
        description: "Grand Soir by Maison Francis Kurkdjian. A spec film crafted entirely with artificial intelligence."
      },
      { 
        id: 2, 
        thumbnail: "https://images.unsplash.com/photo-1595389294696-ae969ff733a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU1NzExNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Product Reveal",
        description: "Capturing the essence of luxury through AI-generated visuals and cinematography."
      },
      { 
        id: 3, 
        thumbnail: "https://images.unsplash.com/photo-1554941829-202a0b2403b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpb3xlbnwxfHx8fDE3NTU3ODQyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Lifestyle Moments",
        description: "Elegant moments that showcase the fragrance in everyday luxury settings."
      },
      { 
        id: 4, 
        thumbnail: "https://images.unsplash.com/photo-1519662978799-2f05096d3636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU1Njk2OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Brand Story",
        description: "The narrative behind the fragrance, told through innovative AI filmmaking."
      },
      { 
        id: 5, 
        thumbnail: "https://images.unsplash.com/photo-1616527546362-bf6b7f80a751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNpbmVtYXxlbnwxfHx8fDE3NTU3ODQyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Final Cut",
        description: "The complete commercial showcasing the art of AI-driven storytelling."
      }
    ]
  },
  {
    id: 2,
    title: "Ernesto Neto for Le Bon Marché Rive Gauche",
    category: "documentary",
    year: "2024",
    description: "Capturing the artist before and after the exhibition. Where brand and art meet through cinema.",
    client: "Le Bon Marché",
    videos: [
      { 
        id: 6, 
        thumbnail: "https://images.unsplash.com/photo-1661260728107-0cd7bf801685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMHN0cmVldHxlbnwxfHx8fDE3NTU3ODQyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Artist Portrait",
        description: "Capturing the artist before and after the exhibition. Where brand and art meet through cinema."
      },
      { 
        id: 7, 
        thumbnail: "https://images.unsplash.com/photo-1554941829-202a0b2403b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpb3xlbnwxfHx8fDE3NTU3ODQyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Exhibition Setup",
        description: "Behind the scenes of creating a monumental art installation in Paris."
      },
      { 
        id: 8, 
        thumbnail: "https://images.unsplash.com/photo-1519662978799-2f05096d3636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU1Njk2OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Opening Night",
        description: "The grand opening where fashion, art, and culture converge in celebration."
      },
      { 
        id: 9, 
        thumbnail: "https://images.unsplash.com/photo-1680503504148-25f2d178ff05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9kdWN0fGVufDF8fHx8MTc1NTc4NDI2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Artist Interview",
        description: "Intimate conversations with Ernesto Neto about his creative process."
      }
    ]
  },
  {
    id: 3,
    title: "Fashion Forward",
    category: "fashion",
    year: "2024",
    description: "Editorial video showcase for fashion week collection.",
    client: "Studio Fashion",
    videos: [
      { 
        id: 10, 
        thumbnail: "https://images.unsplash.com/photo-1715541448446-3369e1cc0ee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBzdHVkaW98ZW58MXx8fHwxNzU1Nzg0MjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Runway Collection",
        description: "Editorial video showcase for fashion week collection featuring avant-garde designs."
      },
      { 
        id: 11, 
        thumbnail: "https://images.unsplash.com/photo-1595389294696-ae969ff733a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU1NzExNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Designer's Vision",
        description: "Exploring the creative process behind the seasonal collection."
      },
      { 
        id: 12, 
        thumbnail: "https://images.unsplash.com/photo-1616527546362-bf6b7f80a751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNpbmVtYXxlbnwxfHx8fDE3NTU3ODQyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Model Stories",
        description: "Personal narratives from the models who brought the collection to life."
      },
      { 
        id: 13, 
        thumbnail: "https://images.unsplash.com/photo-1554941829-202a0b2403b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpb3xlbnwxfHx8fDE3NTU3ODQyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Behind the Scenes",
        description: "The intricate preparation and coordination of a major fashion show."
      }
    ]
  },
  {
    id: 4,
    title: "Urban Legend",
    category: "film",
    year: "2023",
    description: "Independent narrative exploring city life.",
    client: "Independent Films",
    videos: [
      { 
        id: 14, 
        thumbnail: "https://images.unsplash.com/photo-1661260728107-0cd7bf801685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMHN0cmVldHxlbnwxfHx8fDE3NTU3ODQyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "City Awakens",
        description: "Independent narrative exploring city life through the lens of ordinary people."
      },
      { 
        id: 15, 
        thumbnail: "https://images.unsplash.com/photo-1519662978799-2f05096d3636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU1Njk2OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Character Study",
        description: "Deep dive into the lives of urban dwellers and their interconnected stories."
      },
      { 
        id: 16, 
        thumbnail: "https://images.unsplash.com/photo-1616527546362-bf6b7f80a751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNpbmVtYXxlbnwxfHx8fDE3NTU3ODQyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Night Scenes",
        description: "The city transforms at night, revealing hidden stories and connections."
      },
      { 
        id: 17, 
        thumbnail: "https://images.unsplash.com/photo-1595389294696-ae969ff733a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU1NzExNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Resolution",
        description: "Where all the urban stories converge in a powerful narrative conclusion."
      }
    ]
  },
  {
    id: 5,
    title: "Motion Poetry",
    category: "animation",
    year: "2024",
    description: "Abstract animation series exploring emotions.",
    client: "Art Collective",
    videos: [
      { 
        id: 18, 
        thumbnail: "https://images.unsplash.com/photo-1663867148037-5dd602c68fd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFuaW1hdGlvbnxlbnwxfHx8fDE3NTU3ODQyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Emotional Landscapes",
        description: "Abstract animation series exploring emotions through fluid visual poetry."
      },
      { 
        id: 19, 
        thumbnail: "https://images.unsplash.com/photo-1554941829-202a0b2403b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpb3xlbnwxfHx8fDE3NTU3ODQyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Color Symphony",
        description: "How colors dance and interact to create emotional resonance."
      },
      { 
        id: 20, 
        thumbnail: "https://images.unsplash.com/photo-1680503504148-25f2d178ff05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9kdWN0fGVufDF8fHx8MTc1NTc4NDI2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Form and Flow",
        description: "The relationship between movement and meaning in abstract animation."
      },
      { 
        id: 21, 
        thumbnail: "https://images.unsplash.com/photo-1715541448446-3369e1cc0ee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBzdHVkaW98ZW58MXx8fHwxNzU1Nzg0MjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Digital Dreams",
        description: "Exploring the subconscious through algorithmic animation techniques."
      }
    ]
  }
];



// Individual project wrapper with fade-in effect
function ProjectWrapper({ work, speed, onNavigate, delay }: {
  work: any;
  speed: number;
  onNavigate?: (page: string, projectId?: number) => void;
  delay: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldFadeIn, setShouldFadeIn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset states when component remounts (category change)
    setIsVisible(false);
    setShouldFadeIn(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Add a delay before fading in
          setTimeout(() => {
            setShouldFadeIn(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, work.id]); // Add work.id to dependencies to reset on category change

  return (
    <div 
      ref={ref} 
      className={`transition-opacity duration-700 ease-out ${
        isVisible && shouldFadeIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <AutoScrollCarousel
        work={work}
        speed={speed}
        onNavigate={onNavigate}
      />
    </div>
  );
}

interface WorkPageProps {
  onNavigate?: (page: string, projectId?: number) => void;
}

export default function WorkPage({ onNavigate }: WorkPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedCategory, setDisplayedCategory] = useState('all');

  const handleCategoryChange = (newCategory: string) => {
    if (newCategory === selectedCategory || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // After fade-out completes, change the category and fade back in
    setTimeout(() => {
      setSelectedCategory(newCategory);
      setDisplayedCategory(newCategory);
      setIsTransitioning(false);
    }, 300); // 300ms for fade-out
  };

  const getWorksByCategory = (category: string) => {
    return category === 'all' 
      ? mockWorks 
      : mockWorks.filter(work => work.category === category);
  };

  const filteredWorks = getWorksByCategory(displayedCategory);

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      <div className="max-w-full py-12">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-[15px] mb-16">
          {/* Main statement */}
          <div className="mb-12">
            <h1 className="typography-h1 text-black max-w-4xl">
              we are a mixed-media production company based in são paulo brazil - working in the intersection of design, film production & post-production.
            </h1>
          </div>
          
          {/* Another horizontal line */}
          <div className="w-full h-px bg-black mb-8"></div>
          
          {/* Our work title and Category Filter in same line */}
          <div className="flex justify-between items-center mb-6">
            {/* Our work title - smaller */}
            <h2 className="typography-h5 text-black">Our work</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  onClick={() => handleCategoryChange(category)}
                  className={`text-base capitalize transition-all duration-200 ${
                    selectedCategory === category
                      ? 'text-black bg-black/5'
                      : 'text-black/70 hover:text-black hover:bg-black/5'
                  } ${isTransitioning ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Works with Auto-scrolling Videos and Transition Effects */}
        <div 
          className={`space-y-20 transition-opacity duration-300 ease-out ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {filteredWorks.map((work, index) => (
            <ProjectWrapper
              key={`${displayedCategory}-${work.id}`} // Include category in key to force re-render
              work={work}
              speed={15 + (index * 3)} // Slower speeds for visual interest
              onNavigate={onNavigate}
              delay={isTransitioning ? 0 : index * 200} // Faster staggering during transitions, none during category change
            />
          ))}
        </div>

        {/* Bottom section with statistics and contact */}
        <div className="max-w-7xl mx-auto mt-20 px-[15px]">
          {/* Statistics section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left column - Statement */}
              <div>
                <p className="text-black text-base">
                  We transform ideas into images that resonate across cultures.
                </p>
              </div>
              
              {/* Right column - Statistics */}
              <div className="space-y-12">
                {/* 15+ */}
                <div>
                  <div className="text-8xl md:text-9xl text-black mb-2 leading-none font-['Instrument_Sans']">15+</div>
                  <div className="text-black text-sm max-w-xs">
                    Years of experience combining cinema, design and technology.
                  </div>
                </div>
                
                {/* 5 */}
                <div className="border-t border-black pt-8">
                  <div className="text-8xl md:text-9xl text-black mb-2 font-['Instrument_Sans'] leading-none">5</div>
                  <div className="text-black text-sm max-w-xs">
                    Continents where our films were exhibited or produced.
                  </div>
                </div>
                
                {/* 1 */}
                <div className="border-t border-black pt-8">
                  <div className="text-8xl md:text-9xl text-black mb-2 font-['Instrument_Sans'] leading-none">1</div>
                  <div className="text-black text-sm max-w-xs">
                    Pioneering studio in Brazil integrating AI as a creative language.
                  </div>
                </div>
                
                {/* About link */}
                <div className="pt-8">
                  <button 
                    className="text-black text-sm hover:opacity-70 transition-opacity flex items-center gap-1"
                    onClick={() => onNavigate?.('contact')}
                  >
                    About
                    <span className="text-xs">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Horizontal line */}
          <div className="w-full h-px bg-black mb-8"></div>
          
          {/* Connect text */}
          <div className="mb-8">
            <p className="text-black text-base">
              Connect with us to create your next project.
            </p>
          </div>
          
          {/* Horizontal line */}
          <div className="w-full h-px bg-black mb-12"></div>
          
          {/* Contact information */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Office */}
              <div>
                <div className="text-xs text-black uppercase tracking-wide mb-4">OFFICE</div>
                <div className="space-y-1 text-sm text-black">
                  <div>Rua Lira, 151 - Sala 12</div>
                  <div>Vila Madalena</div>
                  <div>São Paulo - Brazil</div>
                </div>
              </div>
              
              {/* Social */}
              <div>
                <div className="text-xs text-black uppercase tracking-wide mb-4">SOCIAL</div>
                <div className="space-y-1 text-sm text-black">
                  <a href="https://www.instagram.com/dietrichtv" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-70 transition-opacity underline block">Instagram</a>
                  <a href="https://www.behance.net/dietrichtv" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-70 transition-opacity underline block">Behance</a>
                  <a href="https://www.linkedin.com/company/dietrich-tv-studio" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-70 transition-opacity underline block">LinkedIn</a>
                </div>
              </div>
              
              {/* Contact */}
              <div>
                <div className="text-xs text-black uppercase tracking-wide mb-4">CONTACT</div>
                <div className="space-y-1 text-sm text-black">
                  <div className="cursor-pointer hover:opacity-70 transition-opacity">+55 11 99306 8428</div>
                  <div className="cursor-pointer hover:opacity-70 transition-opacity underline">contact@dietrich.tv</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Large logo */}
          <div className="text-center">
            <div className="text-5xl md:text-6xl lg:text-8xl text-black font-['Instrument_Sans']">
              dietrich.tv studio
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}