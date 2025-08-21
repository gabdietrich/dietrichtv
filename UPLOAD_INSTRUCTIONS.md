# 📤 Instruções para Upload de Mídia

## 🎯 Como Adicionar Suas Mídias

### 1️⃣ **Preparar os Arquivos**

#### Videos para Carrossel (Homepage):
- **Converter para MP4** (H.264)
- **Dimensões:** 1080x1080 (quadrado) ou 16:9
- **Duração:** 3-10 segundos
- **Remover áudio** (silent)
- **Otimizar para web** (máx 5MB cada)

#### Imagens para Galeria (Páginas internas):
- **Formato:** JPG ou WebP
- **Dimensões:** 1920x1080 (Full HD)
- **Qualidade:** 80-90%
- **Otimizar para web** (máx 2MB cada)

#### Thumbnails:
- **Formato:** JPG
- **Dimensões:** 480x480 (quadrado)
- **Qualidade:** 90%

### 2️⃣ **Organizar por Projeto**

Renomeie seus arquivos seguindo a convenção:

```
Projeto: Grand Soir
├── Videos carrossel: video-1.mp4, video-2.mp4, video-3.mp4
├── Imagens galeria: image-1.jpg, image-2.jpg, image-3.jpg  
└── Thumbnail: thumbnail.jpg

Projeto: Fashion Forward Brazil
├── Videos carrossel: video-1.mp4, video-2.mp4, video-3.mp4
├── Imagens galeria: image-1.jpg, image-2.jpg, image-3.jpg
└── Thumbnail: thumbnail.jpg

...e assim por diante
```

### 3️⃣ **Fazer Upload**

Coloque os arquivos nas pastas criadas:

```
public/media/projects/
├── grand-soir/
│   ├── carousel/ ← Videos aqui
│   ├── gallery/  ← Imagens aqui  
│   └── thumbnail.jpg ← Thumbnail aqui
│
├── fashion-forward-brazil/
│   ├── carousel/
│   ├── gallery/
│   └── thumbnail.jpg
│
└── [outros projetos...]
```

### 4️⃣ **Atualizar Links Vimeo**

No arquivo `src/config/mediaConfig.ts`, atualize os IDs do Vimeo:

```typescript
'grand-soir': {
  // ... outras configurações
  vimeoId: '123456789' // ← Seu ID real do Vimeo
}
```

**Como encontrar o ID do Vimeo:**
- URL: `https://vimeo.com/123456789`
- ID: `123456789`

### 5️⃣ **Testar Localmente**

```bash
npm run dev
```

Abra `http://localhost:3000` e verifique se:
- ✅ Videos aparecem no carrossel da homepage
- ✅ Imagens carregam nas páginas internas
- ✅ Thumbnails estão corretos
- ✅ Videos do Vimeo funcionam

### 6️⃣ **Deploy**

```bash
git add .
git commit -m "Add project media assets"
git push
```

O Netlify fará o deploy automático em ~3 minutos.

## 🛠 **Ferramentas Recomendadas**

### Para Otimização de Videos:
- **HandBrake** (gratuito) - compressão e conversão
- **FFmpeg** (linha de comando) - processamento avançado

### Para Otimização de Imagens:
- **TinyPNG** (online) - compressão PNG/JPG
- **Squoosh** (Google, online) - compressão avançada
- **ImageOptim** (Mac) - compressão local

### Comandos FFmpeg Úteis:

```bash
# Converter video para MP4 otimizado
ffmpeg -i input.mov -c:v libx264 -crf 28 -preset slow -vf "scale=1080:1080" -an output.mp4

# Redimensionar imagem para Full HD
ffmpeg -i input.jpg -vf "scale=1920:1080" output.jpg

# Criar thumbnail quadrado
ffmpeg -i input.jpg -vf "scale=480:480" thumbnail.jpg
```

## ❓ **Dúvidas Comuns**

**Q: Posso usar outros formatos além de MP4?**
A: Para máxima compatibilidade, MP4 (H.264) é recomendado.

**Q: E se eu não tiver exatamente 3 videos/imagens?**
A: Você pode repetir o mesmo arquivo ou criar variações.

**Q: Posso usar videos com áudio?**
A: O carrossel principal é silent, mas o Vimeo pode ter áudio.

**Q: Quanto tempo demora o deploy?**
A: ~3 minutos após o git push.

## 🆘 **Suporte**

Se encontrar problemas:
1. Verifique os nomes dos arquivos
2. Confirme as dimensões
3. Teste localmente primeiro
4. Verifique o console do navegador por erros

**Precisa de ajuda?** Entre em contato!
