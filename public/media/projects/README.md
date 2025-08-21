# 📁 Projetos Portfolio - dietrich.tv

## 🎯 Como organizar seus arquivos

### **Cada pasta de projeto deve conter:**

```
projeto-nome/
├── carousel/
│   ├── video-1.mp4 (para carrossel homepage)
│   ├── video-2.mp4
│   └── video-3.mp4
├── gallery/
│   ├── image-1.jpg (para galeria interna)
│   ├── image-2.jpg
│   └── image-3.jpg
└── thumbnail.jpg (imagem quadrada do projeto)
```

### **Especificações técnicas:**

#### Videos Carrossel:
- **Formato:** MP4 (H.264)
- **Dimensões:** 1080x1080 ou 16:9
- **Duração:** 3-10 segundos
- **Áudio:** Remover (silent)
- **Tamanho:** Máximo 5MB cada

#### Imagens Galeria:
- **Formato:** JPG ou WebP
- **Dimensões:** 1920x1080 (Full HD)
- **Qualidade:** 80-90%
- **Tamanho:** Máximo 2MB cada

#### Thumbnail:
- **Formato:** JPG
- **Dimensões:** 480x480 (quadrado)
- **Qualidade:** 90%

### **Projetos criados:**

1. **tresemme-brilho-lamelar** - Tresemmé (Brilho Lamelar)
2. **gracinha-disney** - Gracinha (Disney+)
3. **mothers-day-hering-1** - Mother's Day (Hering)
4. **il-neige-rive-gauche** - Il Neige Rive Gauche (Le Bon Marché)
5. **desejo-natura** - Desejo (Natura)
6. **democrata-gisele-caua** - Democrata (Gisele + Cauã)
7. **manu-gavassi-three-films** - Manu Gavassi (Three Short Films)
8. **ernesto-neto-le-bon-marche** - Ernesto Neto (Shot on Film)
9. **elsa-schiaparelli-private-album** - Elsa Schiaparelli's Private Album
10. **mothers-day-hering-2** - Mother's Day (Hering - Segunda versão)
11. **grand-soir-maison-francis** - Grand Soir (Maison Francis Kurkdjian)

### **Após fazer upload:**
1. Teste localmente: `npm run dev`
2. Faça commit: `git add . && git commit -m "Add project media"`
3. Deploy: `git push`

### **Links Vimeo:**
Atualize os IDs no arquivo `src/config/mediaConfig.ts`
