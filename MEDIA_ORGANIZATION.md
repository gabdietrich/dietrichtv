# 📁 Organização de Mídia - dietrich.tv Portfolio

## Estrutura de Pastas Recomendada

```
public/
└── media/
    ├── projects/
    │   ├── grand-soir/
    │   │   ├── carousel/
    │   │   │   ├── video-1.mp4
    │   │   │   ├── video-2.mp4
    │   │   │   └── video-3.mp4
    │   │   ├── gallery/
    │   │   │   ├── image-1.jpg (1920x1080)
    │   │   │   ├── image-2.jpg (1920x1080)
    │   │   │   └── image-3.jpg (1920x1080)
    │   │   └── thumbnail.jpg (480x480 square)
    │   │
    │   ├── fashion-forward-brazil/
    │   │   ├── carousel/
    │   │   ├── gallery/
    │   │   └── thumbnail.jpg
    │   │
    │   ├── fashion-forward/
    │   │   ├── carousel/
    │   │   ├── gallery/
    │   │   └── thumbnail.jpg
    │   │
    │   └── [outros-projetos]/
    │
    └── brand/
        ├── logo.svg
        ├── favicon.ico
        └── og-image.jpg
```

## 📋 Especificações Técnicas

### Videos para Carrossel Principal (Página Home)
- **Formato:** MP4 (H.264)
- **Dimensões:** 1080x1080 (square) ou 16:9
- **Duração:** 3-10 segundos
- **Qualidade:** Sem áudio, loop perfeito
- **Tamanho:** Máximo 5MB cada

### Imagens para Galeria Interna
- **Formato:** JPG ou WebP
- **Dimensões:** 1920x1080 (Full HD 16:9)
- **Qualidade:** 80-90% para web
- **Tamanho:** Máximo 2MB cada

### Thumbnail de Projeto
- **Formato:** JPG
- **Dimensões:** 480x480 (square)
- **Uso:** Preview no grid de projetos

### Links Vimeo
- **Formato:** URL do player embed
- **Exemplo:** `https://player.vimeo.com/video/123456789`

## 🔧 Como Implementar

1. **Criar as pastas** na estrutura acima
2. **Fazer upload das mídias** organizadas por projeto
3. **Atualizar os dados** nos componentes React
4. **Configurar lazy loading** para performance
5. **Adicionar fallbacks** para carregamento

## 📝 Convenção de Nomes

### Videos do Carrossel:
- `video-1.mp4` (primeira sequência)
- `video-2.mp4` (segunda sequência)  
- `video-3.mp4` (terceira sequência)

### Imagens da Galeria:
- `image-1.jpg` (primeira imagem)
- `image-2.jpg` (segunda imagem)
- `image-3.jpg` (terceira imagem)

### Thumbnails:
- `thumbnail.jpg` (imagem quadrada do projeto)

## 🚀 Vantagens desta Organização

✅ **Fácil manutenção** - cada projeto isolado
✅ **Escalável** - adicionar novos projetos é simples
✅ **Performance** - carregamento otimizado
✅ **SEO friendly** - URLs organizadas
✅ **Backup** - fácil de fazer backup por projeto
