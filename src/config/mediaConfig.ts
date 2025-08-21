// 📁 Configuração centralizada de mídia para o portfolio

export interface MediaConfig {
  carousel: string[]; // Videos para carrossel principal (3 videos)
  gallery: string[];  // Imagens para galeria interna (3 imagens FullHD)
  thumbnail: string;  // Thumbnail quadrado do projeto
  vimeoId: string;   // ID do vídeo no Vimeo
}

export interface ProjectMedia {
  [key: string]: MediaConfig;
}

// Configuração de mídia por projeto
export const projectMedia: ProjectMedia = {
  'grand-soir': {
    carousel: [
      '/media/projects/grand-soir/carousel/video-1.mp4',
      '/media/projects/grand-soir/carousel/video-2.mp4', 
      '/media/projects/grand-soir/carousel/video-3.mp4'
    ],
    gallery: [
      '/media/projects/grand-soir/gallery/image-1.jpg',
      '/media/projects/grand-soir/gallery/image-2.jpg',
      '/media/projects/grand-soir/gallery/image-3.jpg'
    ],
    thumbnail: '/media/projects/grand-soir/thumbnail.jpg',
    vimeoId: '891234567' // Substituir pelo ID real do Vimeo
  },
  
  'fashion-forward-brazil': {
    carousel: [
      '/media/projects/fashion-forward-brazil/carousel/video-1.mp4',
      '/media/projects/fashion-forward-brazil/carousel/video-2.mp4',
      '/media/projects/fashion-forward-brazil/carousel/video-3.mp4'
    ],
    gallery: [
      '/media/projects/fashion-forward-brazil/gallery/image-1.jpg',
      '/media/projects/fashion-forward-brazil/gallery/image-2.jpg',
      '/media/projects/fashion-forward-brazil/gallery/image-3.jpg'
    ],
    thumbnail: '/media/projects/fashion-forward-brazil/thumbnail.jpg',
    vimeoId: '891234568'
  },
  
  'fashion-forward': {
    carousel: [
      '/media/projects/fashion-forward/carousel/video-1.mp4',
      '/media/projects/fashion-forward/carousel/video-2.mp4',
      '/media/projects/fashion-forward/carousel/video-3.mp4'
    ],
    gallery: [
      '/media/projects/fashion-forward/gallery/image-1.jpg',
      '/media/projects/fashion-forward/gallery/image-2.jpg',
      '/media/projects/fashion-forward/gallery/image-3.jpg'
    ],
    thumbnail: '/media/projects/fashion-forward/thumbnail.jpg',
    vimeoId: '891234569'
  },
  
  'urban-legend': {
    carousel: [
      '/media/projects/urban-legend/carousel/video-1.mp4',
      '/media/projects/urban-legend/carousel/video-2.mp4',
      '/media/projects/urban-legend/carousel/video-3.mp4'
    ],
    gallery: [
      '/media/projects/urban-legend/gallery/image-1.jpg',
      '/media/projects/urban-legend/gallery/image-2.jpg',
      '/media/projects/urban-legend/gallery/image-3.jpg'
    ],
    thumbnail: '/media/projects/urban-legend/thumbnail.jpg',
    vimeoId: '891234570'
  },
  
  'motion-poetry': {
    carousel: [
      '/media/projects/motion-poetry/carousel/video-1.mp4',
      '/media/projects/motion-poetry/carousel/video-2.mp4',
      '/media/projects/motion-poetry/carousel/video-3.mp4'
    ],
    gallery: [
      '/media/projects/motion-poetry/gallery/image-1.jpg',
      '/media/projects/motion-poetry/gallery/image-2.jpg',
      '/media/projects/motion-poetry/gallery/image-3.jpg'
    ],
    thumbnail: '/media/projects/motion-poetry/thumbnail.jpg',
    vimeoId: '891234571'
  }
};

// Função helper para buscar mídia de um projeto
export const getProjectMedia = (projectSlug: string): MediaConfig | null => {
  return projectMedia[projectSlug] || null;
};

// Função para converter ID do projeto para slug
export const getProjectSlug = (projectId: number): string => {
  const slugMap: { [key: number]: string } = {
    1: 'grand-soir',
    2: 'fashion-forward-brazil', 
    3: 'fashion-forward',
    4: 'urban-legend',
    5: 'motion-poetry'
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
