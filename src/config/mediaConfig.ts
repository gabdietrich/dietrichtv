// 📁 Configuração centralizada de mídia para o portfolio

export interface MediaConfig {
  carousel: string[]; // Videos para carrossel principal (3 videos)
  carouselMobile?: string[]; // Videos otimizados para mobile (360x360)
  gallery: string[];  // Imagens para galeria interna (3 imagens FullHD)
  thumbnail: string;  // Thumbnail quadrado do projeto
  vimeoId: string;   // ID do vídeo no Vimeo
}

export interface ProjectMedia {
  [key: string]: MediaConfig;
}

// Configuração de mídia por projeto
export const projectMedia: ProjectMedia = {
  'tresemme-brilho-lamelar': {
    carousel: [
      '/media/projects/tresemme-brilho-lamelar/carousel/tresemmé_-_brilho_lamelar (Original)_01.mp4',
      '/media/projects/tresemme-brilho-lamelar/carousel/tresemmé_-_brilho_lamelar (Original)_03.mp4',
      '/media/projects/tresemme-brilho-lamelar/carousel/tresemmé_-_brilho_lamelar (Original)_04.mp4'
    ],
    carouselMobile: [
      '/media/projects/tresemme-brilho-lamelar/carousel/tresemmé_-_brilho_lamelar (Original)_01-mobile.mp4',
      '/media/projects/tresemme-brilho-lamelar/carousel/tresemmé_-_brilho_lamelar (Original)_03-mobile.mp4',
      '/media/projects/tresemme-brilho-lamelar/carousel/tresemmé_-_brilho_lamelar (Original)_04-mobile.mp4'
    ],
    gallery: [
      '/media/projects/tresemme-brilho-lamelar/gallery/image-1.jpg',
      '/media/projects/tresemme-brilho-lamelar/gallery/image-2.jpg',
      '/media/projects/tresemme-brilho-lamelar/gallery/image-3.jpg'
    ],
    thumbnail: '/media/projects/tresemme-brilho-lamelar/thumbnail.jpg',
    vimeoId: '891234567'
  },
  
  'gracinha-disney': {
    carousel: [
      '/media/projects/gracinha-disney/carousel/video-1.mp4',
      '/media/projects/gracinha-disney/carousel/video-2.mp4',
      '/media/projects/gracinha-disney/carousel/video-3.mp4'
    ],
    gallery: [
      '/media/projects/gracinha-disney/gallery/image-1.jpg',
      '/media/projects/gracinha-disney/gallery/image-2.jpg',
      '/media/projects/gracinha-disney/gallery/image-3.jpg'
    ],
    thumbnail: '/media/projects/gracinha-disney/thumbnail.jpg',
    vimeoId: '891234568'
  },
  
  'mothers-day-hering-1': {
    carousel: [
      '/media/projects/mothers-day-hering-1/carousel/video-1.mp4',
      '/media/projects/mothers-day-hering-1/carousel/video-2.mp4',
      '/media/projects/mothers-day-hering-1/carousel/video-3.mp4'
    ],
    gallery: [
      '/media/projects/mothers-day-hering-1/gallery/image-1.jpg',
      '/media/projects/mothers-day-hering-1/gallery/image-2.jpg',
      '/media/projects/mothers-day-hering-1/gallery/image-3.jpg'
    ],
    thumbnail: '/media/projects/mothers-day-hering-1/thumbnail.jpg',
    vimeoId: '891234569'
  },
  
  'il-neige-rive-gauche': {
    carousel: [
      '/media/projects/il-neige-rive-gauche/carousel/video-1.mp4',
      '/media/projects/il-neige-rive-gauche/carousel/video-2.mp4',
      '/media/projects/il-neige-rive-gauche/carousel/video-3.mp4'
    ],
    gallery: [
      '/media/projects/il-neige-rive-gauche/gallery/image-1.jpg',
      '/media/projects/il-neige-rive-gauche/gallery/image-2.jpg',
      '/media/projects/il-neige-rive-gauche/gallery/image-3.jpg'
    ],
    thumbnail: '/media/projects/il-neige-rive-gauche/thumbnail.jpg',
    vimeoId: '891234570'
  },
  
  'desejo-natura': {
    carousel: [
      '/media/projects/desejo-natura/carousel/video-1.mp4',
      '/media/projects/desejo-natura/carousel/video-2.mp4',
      '/media/projects/desejo-natura/carousel/video-3.mp4'
    ],
    gallery: [
      '/media/projects/desejo-natura/gallery/image-1.jpg',
      '/media/projects/desejo-natura/gallery/image-2.jpg',
      '/media/projects/desejo-natura/gallery/image-3.jpg'
    ],
    thumbnail: '/media/projects/desejo-natura/thumbnail.jpg',
    vimeoId: '891234571'
  },
  
  'democrata-gisele-caua': {
    carousel: [
      '/media/projects/democrata-gisele-caua/carousel/video-1.mp4',
      '/media/projects/democrata-gisele-caua/carousel/video-2.mp4',
      '/media/projects/democrata-gisele-caua/carousel/video-3.mp4'
    ],
    gallery: [
      '/media/projects/democrata-gisele-caua/gallery/image-1.jpg',
      '/media/projects/democrata-gisele-caua/gallery/image-2.jpg',
      '/media/projects/democrata-gisele-caua/gallery/image-3.jpg'
    ],
    thumbnail: '/media/projects/democrata-gisele-caua/thumbnail.jpg',
    vimeoId: '891234572'
  },
  
  'manu-gavassi-three-films': {
    carousel: [
      '/media/projects/manu-gavassi-three-films/carousel/video-1.mp4',
      '/media/projects/manu-gavassi-three-films/carousel/video-2.mp4',
      '/media/projects/manu-gavassi-three-films/carousel/video-3.mp4'
    ],
    gallery: [
      '/media/projects/manu-gavassi-three-films/gallery/image-1.jpg',
      '/media/projects/manu-gavassi-three-films/gallery/image-2.jpg',
      '/media/projects/manu-gavassi-three-films/gallery/image-3.jpg'
    ],
    thumbnail: '/media/projects/manu-gavassi-three-films/thumbnail.jpg',
    vimeoId: '891234573'
  },
  
  'ernesto-neto-le-bon-marche': {
    carousel: [
      '/media/projects/ernesto-neto-le-bon-marche/carousel/video-1.mp4',
      '/media/projects/ernesto-neto-le-bon-marche/carousel/video-2.mp4',
      '/media/projects/ernesto-neto-le-bon-marche/carousel/video-3.mp4'
    ],
    carouselMobile: [
      '/media/projects/ernesto-neto-le-bon-marche/carousel/video-1-mobile.mp4',
      '/media/projects/ernesto-neto-le-bon-marche/carousel/video-2-mobile.mp4',
      '/media/projects/ernesto-neto-le-bon-marche/carousel/video-3-mobile.mp4'
    ],
    gallery: [
      '/media/projects/ernesto-neto-le-bon-marche/gallery/image-1.jpg',
      '/media/projects/ernesto-neto-le-bon-marche/gallery/image-2.jpg',
      '/media/projects/ernesto-neto-le-bon-marche/gallery/image-3.jpg'
    ],
    thumbnail: '/media/projects/ernesto-neto-le-bon-marche/thumbnail.jpg',
    vimeoId: '891234574'
  },
  
  'elsa-schiaparelli-private-album': {
    carousel: [
      '/media/projects/elsa-schiaparelli-private-album/carousel/video-1.mp4',
      '/media/projects/elsa-schiaparelli-private-album/carousel/video-2.mp4',
      '/media/projects/elsa-schiaparelli-private-album/carousel/video-3.mp4'
    ],
    gallery: [
      '/media/projects/elsa-schiaparelli-private-album/gallery/image-1.jpg',
      '/media/projects/elsa-schiaparelli-private-album/gallery/image-2.jpg',
      '/media/projects/elsa-schiaparelli-private-album/gallery/image-3.jpg'
    ],
    thumbnail: '/media/projects/elsa-schiaparelli-private-album/thumbnail.jpg',
    vimeoId: '891234575'
  },
  
  'mothers-day-hering-2': {
    carousel: [
      '/media/projects/mothers-day-hering-2/carousel/video-1.mp4',
      '/media/projects/mothers-day-hering-2/carousel/video-2.mp4',
      '/media/projects/mothers-day-hering-2/carousel/video-3.mp4'
    ],
    gallery: [
      '/media/projects/mothers-day-hering-2/gallery/image-1.jpg',
      '/media/projects/mothers-day-hering-2/gallery/image-2.jpg',
      '/media/projects/mothers-day-hering-2/gallery/image-3.jpg'
    ],
    thumbnail: '/media/projects/mothers-day-hering-2/thumbnail.jpg',
    vimeoId: '891234576'
  },
  
  'grand-soir-maison-francis': {
    carousel: [
      '/media/projects/grand-soir-maison-francis/carousel/video-1.mp4',
      '/media/projects/grand-soir-maison-francis/carousel/video-2.mp4',
      '/media/projects/grand-soir-maison-francis/carousel/video-3.mp4'
    ],
    gallery: [
      '/media/projects/grand-soir-maison-francis/gallery/image-1.jpg',
      '/media/projects/grand-soir-maison-francis/gallery/image-2.jpg',
      '/media/projects/grand-soir-maison-francis/gallery/image-3.jpg'
    ],
    thumbnail: '/media/projects/grand-soir-maison-francis/thumbnail.jpg',
    vimeoId: '891234577'
  }
};

// Função helper para buscar mídia de um projeto
export const getProjectMedia = (projectSlug: string): MediaConfig | null => {
  return projectMedia[projectSlug] || null;
};

// Função para converter ID do projeto para slug
export const getProjectSlug = (projectId: number): string => {
  const slugMap: { [key: number]: string } = {
    1: 'tresemme-brilho-lamelar',
    2: 'gracinha-disney',
    3: 'mothers-day-hering-1',
    4: 'il-neige-rive-gauche',
    5: 'desejo-natura',
    6: 'democrata-gisele-caua',
    7: 'manu-gavassi-three-films',
    8: 'ernesto-neto-le-bon-marche',
    9: 'elsa-schiaparelli-private-album',
    10: 'mothers-day-hering-2',
    11: 'grand-soir-maison-francis'
  };
  
  return slugMap[projectId] || '';
};

// Fallback para quando a mídia não estiver disponível
export const fallbackMedia = {
  carousel: [
    'https://images.unsplash.com/photo-1616527546362-bf6b7f80a751?w=480&h=480&fit=crop',
    'https://images.unsplash.com/photo-1601888221673-626d26f726cd?w=480&h=480&fit=crop',
    'https://images.unsplash.com/photo-1526242767279-2ad8d8271177?w=480&h=480&fit=crop'
  ],
  gallery: [
    'https://images.unsplash.com/photo-1616527546362-bf6b7f80a751?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1601888221673-626d26f726cd?w=1920&h=1080&fit=crop', 
    'https://images.unsplash.com/photo-1526242767279-2ad8d8271177?w=1920&h=1080&fit=crop'
  ],
  thumbnail: 'https://images.unsplash.com/photo-1616527546362-bf6b7f80a751?w=480&h=480&fit=crop',
  vimeoId: '891234567'
};
