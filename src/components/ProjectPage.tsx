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
    case 1: // Tresemmé
      return {
        paragraphs: [
          "A beauty film starring Sabrina Sato, in which hair meets star quality. Directed by Dietrich with O2 Filmes.",
          "This campaign for Tresemmé's Brilho Lamelar technology showcases the intersection of celebrity beauty and technical innovation.",
          "Our approach focused on capturing Sabrina Sato's natural charisma while highlighting the product's laminar shine capabilities.",
          "The collaboration with O2 Filmes brought together commercial expertise and artistic vision, creating a beauty film that transcends traditional advertising."
        ],
        tags: ["Beauty Film", "Celebrity", "O2 Filmes", "Commercial"]
      };
    case 2: // Gracinha
      return {
        paragraphs: [
          "A music film that blends pop, fantasy, and cinema. Directed by Dietrich with Manu Gavassi.",
          "Created for Disney+, this project explores the magical intersection of music and visual storytelling.",
          "Working with Manu Gavassi, we crafted a narrative that celebrates Brazilian pop culture within a fantastical cinematic framework.",
          "The film represents our commitment to pushing the boundaries of music video format, creating content that works both as entertainment and art."
        ],
        tags: ["Music Film", "Disney+", "Fantasy", "Brazilian Pop"]
      };
    case 3: // Mother's Day Hering 1
      return {
        paragraphs: [
          "Fernanda Torres and Fernanda Montenegro star in an intimate film celebrating motherhood and timeless connection.",
          "This Mother's Day campaign for Hering captures the profound bond between generations through the lens of Brazil's most beloved actresses.",
          "Our direction focused on authentic moments that speak to universal themes of family, love, and continuity.",
          "The film celebrates not just motherhood, but the enduring power of emotional connections that transcend time."
        ],
        tags: ["Mother's Day", "Hering", "Family", "Brazilian Cinema"]
      };
    case 4: // Il Neige Rive Gauche
      return {
        paragraphs: [
          "An animated winter tale for Le Bon Marché, where Paris becomes poetry.",
          "This seasonal campaign transforms the iconic Parisian department store into a dreamlike animated landscape.",
          "Our animation approach captures the magic of winter in Paris, creating a visual poem that celebrates the wonder of the season.",
          "The project represents our exploration of animation as a medium for luxury retail storytelling, where commerce meets pure artistic expression."
        ],
        tags: ["Animation", "Le Bon Marché", "Winter Tale", "Paris"]
      };
    case 5: // Desejo Natura
      return {
        paragraphs: [
          "A sensorial film for Natura that celebrates desire as a living force. Directed by Dietrich with O2 Filmes.",
          "This campaign explores the concept of desire through the lens of Brazilian beauty and cosmetics.",
          "Our visual approach captures the raw energy and sensuality that defines the Natura brand, creating an intimate portrait of human connection.",
          "The collaboration with O2 Filmes brought together technical excellence and artistic vision, resulting in a film that feels both commercial and deeply personal."
        ],
        tags: ["Sensorial Film", "Natura", "O2 Filmes", "Desire"]
      };
    case 6: // Democrata
      return {
        paragraphs: [
          "An elegant launch set to Brazilian legend Jorge Ben's classic \"Lá Vem Ela\".",
          "Featuring Gisele Bündchen and Cauã Raymond, this campaign celebrates Brazilian culture through fashion and music.",
          "Our direction pays homage to Jorge Ben's iconic song while showcasing contemporary Brazilian style and elegance.",
          "The project represents a perfect fusion of musical heritage and modern fashion sensibility, creating a truly Brazilian visual narrative."
        ],
        tags: ["Fashion", "Jorge Ben", "Brazilian Culture", "Elegance"]
      };
    case 7: // Manu Gavassi Three Films
      return {
        paragraphs: [
          "Three short films with Manu Gavassi, blending fashion, music, and cinema. A trilogy that explores image as performance and persona.",
          "This fashion film series examines the relationship between identity and performance in contemporary Brazilian pop culture.",
          "Each film in the trilogy explores different aspects of Manu Gavassi's artistic persona, creating a multifaceted portrait of modern celebrity.",
          "Our approach treated fashion as narrative, using clothing and styling to tell stories about identity, performance, and self-expression."
        ],
        tags: ["Fashion Film", "Trilogy", "Performance", "Identity"]
      };
    case 8: // Ernesto Neto
      return {
        paragraphs: [
          "Capturing the artist before and after the exhibition. Where brand and art meet through cinema.",
          "This documentary explores the creative process of renowned Brazilian artist Ernesto Neto through the lens of his Le Bon Marché exhibition.",
          "Shot on film, our approach captures the raw authenticity of artistic creation, documenting both the preparation and aftermath of a major exhibition.",
          "The project represents our commitment to documenting Brazilian art on the international stage, showing how local creativity translates to global contexts."
        ],
        tags: ["Documentary", "Shot on Film", "Brazilian Art", "Exhibition"]
      };
    case 9: // Elsa Schiaparelli
      return {
        paragraphs: [
          "Elsa Schiaparelli remembered through an intimate portrait film. A dialogue between fashion, memory, and the cosmos.",
          "This documentary explores the legacy of the iconic fashion designer through a deeply personal and poetic lens.",
          "Our approach creates connections between Schiaparelli's revolutionary designs and contemporary fashion thinking, showing how her vision continues to influence modern creativity.",
          "The film represents our exploration of fashion history as living memory, where past innovation continues to shape present expression."
        ],
        tags: ["Documentary", "Fashion History", "Legacy", "Memory"]
      };
    case 10: // Mother's Day Hering 2
      return {
        paragraphs: [
          "Sasha, Bruna Marquezine, Xuxa and Neide — a celebration of generations and love.",
          "This second Mother's Day campaign for Hering brings together multiple generations of Brazilian celebrities to celebrate family bonds.",
          "Our direction focuses on the authentic connections between these women, creating a portrait of Brazilian motherhood that spans generations.",
          "The film celebrates not just individual relationships, but the cultural continuity that defines Brazilian family values."
        ],
        tags: ["Mother's Day", "Generations", "Brazilian Celebrities", "Family"]
      };
    case 11: // Grand Soir
      return {
        paragraphs: [
          "Grand Soir by Maison Francis Kurkdjian. A spec film crafted entirely with artificial intelligence. 100% AI-made.",
          "This groundbreaking project represents our exploration of AI as a creative medium, pushing the boundaries of what's possible in commercial filmmaking.",
          "Every frame, movement, and visual element was generated using artificial intelligence, creating a film that exists at the intersection of technology and luxury.",
          "The project demonstrates our vision for the future of filmmaking, where AI becomes a collaborative partner in creating beauty that was previously impossible to achieve."
        ],
        tags: ["AI Cinema", "100% AI-made", "Spec Film", "Innovation"]
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
          <div className="space-y-8 pt-[110px]">
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