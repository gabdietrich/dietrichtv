import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';

interface ProjectPageProps {
  projectId: number;
  onNavigate: (page: string, projectId?: number) => void;
}

// Use the same mock data from WorkPage
const mockWorks = [
  {
    id: 1,
    title: "Grand Soir",
    category: "commercial",
    year: "2024",
    description: "A spec film crafted entirely with artificial intelligence.",
    client: "Maison Francis Kurkdjian",
    fullDescription: "Filming an artist in their element is very different from documenting an exhibition. It is moving from the serious studio space, where instalment and previous works are built to develop into gigantic sculptures, to the white walls, huge architecture, that evoke an exhibition or a public square. The core process of their exhibition: art as method. For as, this project reinforces something essential: brands can truly connect and air form are showcasing results, but by embracing processes. That's where aesthetic resonance, truth, happens in boundaries of advertising.",
    projectType: "Case Study",
    role: "Short film",
    artDirection: "Art Direction", 
    colorGrading: "Color Grading",
    creativeProducer: "Creative Producer",
    vimeoId: "891234567",
    carouselImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1616527546362-bf6b7f80a751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBmaWxtJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NTU3ODgzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Film production behind the scenes"
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1601888221673-626d26f726cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb21tZXJjaWFsJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU1Nzg4MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Luxury commercial photography setup"
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1526242767279-2ad8d8271177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTU3NzE0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Creative studio workspace"
      }
    ]
  },
    {
    id: 2,
    title: "Fashion Forward Brazil",
    category: "fashion",
    year: "2024", 
    description: "A cinematic journey through São Paulo's emerging fashion scene.",
    client: "SPFW",
    fullDescription: "Fashion Forward Brazil explores the intersection between traditional craftsmanship and contemporary design in São Paulo's vibrant fashion landscape.",
    projectType: "Documentary",
    role: "Fashion Film",
    artDirection: "Creative Direction", 
    colorGrading: "Color Grading",
    creativeProducer: "Executive Producer",
    vimeoId: "891234567",
    carouselImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1616527546362-bf6b7f80a751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBmaWxtJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NTU3ODgzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Documentary film production"
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1601888221673-626d26f726cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb21tZXJjaWFsJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU1Nzg4MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Art exhibition documentation"
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1526242767279-2ad8d8271177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTU3NzE0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Artist studio space"
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
    fullDescription: "A groundbreaking fashion film that explores the intersection of haute couture and digital artistry. Through innovative cinematography and cutting-edge post-production techniques, we captured the essence of contemporary fashion design while pushing the boundaries of traditional fashion filmmaking.",
    projectType: "Case Study",
    role: "Fashion Film",
    artDirection: "Art Direction",
    colorGrading: "Color Grading",
    creativeProducer: "Creative Producer",
    vimeoId: "891234567",
    carouselImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1616527546362-bf6b7f80a751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBmaWxtJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NTU3ODgzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Fashion film production"
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1601888221673-626d26f726cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb21tZXJjaWFsJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU1Nzg4MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Fashion editorial setup"
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1526242767279-2ad8d8271177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTU3NzE0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Fashion design workspace"
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
    fullDescription: "An intimate exploration of urban life through the lens of interconnected stories. This independent narrative film captures the essence of modern city living, examining how individual stories weave together to create a larger tapestry of human experience.",
    projectType: "Case Study",
    role: "Narrative Film",
    artDirection: "Art Direction",
    colorGrading: "Color Grading",
    creativeProducer: "Creative Producer",
    vimeoId: "891234567",
    carouselImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1616527546362-bf6b7f80a751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBmaWxtJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NTU3ODgzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Urban film production"
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1601888221673-626d26f726cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb21tZXJjaWFsJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU1Nzg4MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "City narrative scenes"
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1526242767279-2ad8d8271177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTU3NzE0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Urban storytelling workspace"
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
    fullDescription: "An experimental animation series that translates human emotions into abstract visual poetry. Using cutting-edge animation techniques and generative art processes, we created a series of moving images that speak to the universal language of feeling.",
    projectType: "Case Study",
    role: "Animation Series",
    artDirection: "Art Direction",
    colorGrading: "Color Grading",
    creativeProducer: "Creative Producer",
    vimeoId: "891234567",
    carouselImages: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1616527546362-bf6b7f80a751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBmaWxtJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NTU3ODgzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Animation production studio"
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1601888221673-626d26f726cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb21tZXJjaWFsJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU1Nzg4MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Motion graphics creation"
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1526242767279-2ad8d8271177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTU3NzE0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Animation creative workspace"
      }
    ]
  }
];

interface AutoScrollCarouselProps {
  images: { id: number; url: string; alt: string }[];
}

function AutoScrollCarousel({ images }: AutoScrollCarouselProps) {
  // Duplicamos as imagens para criar um loop infinito suave
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full aspect-video overflow-hidden">
      <div 
        className="flex flex-col animate-scroll-continuous-vertical"
        style={{ height: `${duplicatedImages.length * 100}%` }}
      >
        {duplicatedImages.map((image, index) => (
          <div 
            key={`${image.id}-${index}`} 
            className="w-full h-full flex-shrink-0"
            style={{ height: `${100 / duplicatedImages.length}%` }}
          >
            <ImageWithFallback
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Function to get project-specific content
const getProjectContent = (projectId: number) => {
  switch (projectId) {
    case 1:
      return {
        paragraphs: [
          "A spec film crafted entirely with artificial intelligence, exploring the boundaries between technology and luxury storytelling.",
          "At Dietrich.TV, we embraced AI as a creative partner, using generative tools to craft every frame, sound, and movement of this ethereal piece for Maison Francis Kurkdjian.",
          "Our approach wasn't about replacing human creativity, but amplifying it. The result is a film that feels both otherworldly and deeply human, capturing the essence of Grand Soir through an entirely new lens.",
          "This project represents our vision for the future of filmmaking: where artificial intelligence becomes a brush in the hands of digital artists, creating beauty that was previously impossible."
        ],
        tags: ["AI Cinema", "Luxury Brand", "Generative Art", "Spec Work"]
      };
    case 2:
      return {
        paragraphs: [
          "A cinematic exploration of São Paulo's vibrant fashion ecosystem, where tradition meets innovation on every street corner.",
          "Fashion Forward Brazil captures the raw energy of emerging designers who are redefining what Brazilian fashion means to the world.",
          "Through intimate portraits and dynamic runway sequences, we documented a generation of creators who blend ancestral techniques with cutting-edge design philosophy.",
          "This documentary celebrates not just clothing, but the cultural movement that positions Brazil as a powerhouse of contemporary fashion creativity."
        ],
        tags: ["Fashion Documentary", "Cultural Portrait", "São Paulo", "Emerging Designers"]
      };
    case 3:
      return {
        paragraphs: [
          "An editorial fashion film that pushes the boundaries of visual storytelling, merging high fashion with experimental cinematography.",
          "Shot across multiple locations in São Paulo, this project explores fashion as a form of architectural expression, where garments become structures and models become living sculptures.",
          "Our approach combined traditional fashion film techniques with avant-garde visual effects, creating a piece that feels both editorial and artistic.",
          "Fashion Forward represents our commitment to elevating fashion content beyond mere documentation, transforming it into pure visual poetry."
        ],
        tags: ["Fashion Film", "Editorial", "Visual Poetry", "Avant-garde"]
      };
    default:
      return {
        paragraphs: [
          "Every project at Dietrich.TV begins with a question: how can we tell this story in a way that's never been told before?",
          "Our approach combines traditional filmmaking craft with cutting-edge technology, always in service of authentic storytelling.",
          "Whether working with brands, artists, or cultural institutions, we believe in the power of cinema to create genuine emotional connections.",
          "This project represents our ongoing exploration of how visual media can bridge the gap between commercial objectives and artistic expression."
        ],
        tags: ["Creative Direction", "Brand Storytelling", "Visual Innovation", "Cultural Bridge"]
      };
  }
};

export default function ProjectPage({ projectId, onNavigate }: ProjectPageProps) {
  const currentProject = mockWorks.find(work => work.id === projectId);
  const projectContent = getProjectContent(projectId);
  
  if (!currentProject) {
    return <div className="min-h-screen bg-white flex items-center justify-center">Project not found</div>;
  }

  // Get other projects (exclude current project) and take first 3
  const otherProjects = mockWorks.filter(work => work.id !== projectId).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      {/* Header section - Case Study Layout */}
      <div className="max-w-7xl mx-auto px-[15px] py-12">
        {/* Two column layout like case study */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left column - Project type and title */}
          <div className="space-y-6">
            <div className="typography-h4 text-black underline decoration-1 underline-offset-2">{currentProject.projectType}</div>
            <h1 className="typography-h1 text-black leading-tight">
              {currentProject.title}
            </h1>
          </div>

          {/* Right column - Description and tags */}
          <div className="space-y-8">
            <div className="space-y-6">
              {projectContent.paragraphs.map((paragraph, index) => (
                <p key={index} className="typography-paragraph1 text-black">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Tags section - aesthetic only */}
            <div className="pt-8 border-t border-gray-200">
              <div className="space-y-2">
                {projectContent.tags.map((tag, index) => (
                  <div key={index} className="typography-paragraph2 text-gray-500">{tag}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Auto-scroll Carousel with 16:9 images */}
        <div className="mb-12">
          <AutoScrollCarousel images={currentProject.carouselImages} />
        </div>

        {/* Vimeo video embed */}
        <div className="mb-20">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={`https://player.vimeo.com/video/${currentProject.vimeoId}?h=0&badge=0&autopause=0&player_id=0&app_id=58479`}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title={currentProject.title}
            />
          </div>
        </div>

        {/* Other Projects section */}
        <div className="mt-[150px] mb-20">
          {/* Horizontal line 20px above title */}
          <div className="w-full h-px bg-black mb-5"></div>
          <h2 className="text-4xl md:text-5xl text-black mb-8 font-['Instrument_Sans']">Other Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((project) => {
              return (
                <div 
                  key={project.id}
                  className="cursor-pointer group"
                  onClick={() => onNavigate('project', project.id)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={project.carouselImages[0].url}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="mt-3">
                    <div className="text-sm text-gray-500">Next Project →</div>
                    <div className="text-base text-black">{project.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact section */}
        <div className="border-t border-black pt-12 mb-20">
          <div className="text-center space-y-4">
            <p className="text-lg text-black">
              Connect with us to explore your project's potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Office info */}
            <div>
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">Office</div>
              <div className="space-y-1 text-sm text-black">
                <div>Rua Lira, 151 - Sala 12</div>
                <div>Vila Madalena</div>
                <div>São Paulo - Brazil</div>
              </div>
            </div>
            
            {/* Social and Contact */}
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">Social</div>
                <div className="space-y-1 text-sm text-black">
                  <a href="https://www.instagram.com/dietrichtv" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity block">Instagram</a>
                  <a href="https://www.behance.net/dietrichtv" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity block">Behance</a>
                  <a href="https://www.linkedin.com/company/dietrich-tv-studio" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity block">LinkedIn</a>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">Contact</div>
                <div className="space-y-1 text-sm text-black">
                  <div>+55 11 99303 5439</div>
                  <div>contact@dietrich.tv</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large logo */}
        <div className="text-center">
          <div className="text-6xl md:text-8xl font-normal text-black font-['Instrument_Sans']">
            dietrich.tv studio
          </div>
        </div>
      </div>
    </div>
  );
}