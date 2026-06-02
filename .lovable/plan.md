# Foto no Hero + Seção "Últimas notícias sobre mim"

## 1. Foto no Hero
- Subir `image.png` (selfie) como asset CDN → `src/assets/gustavo-portrait.png.asset.json`.
- Atualizar `src/components/sections/Hero.tsx` para grid 2 colunas no desktop:
  - **Esquerda**: bloco atual (badge, H1, parágrafo, tags) — sem alterar texto.
  - **Direita**: retrato vertical (aspect 4/5) em moldura `glass-card`, cantos arredondados, glow `--accent` atrás, leve grain para integrar ao tema dark. Pequena etiqueta mono "Joinville · SC" sobreposta. Animação Framer Motion suave.
  - **Mobile**: foto acima do texto, centralizada e menor.

## 2. Seção "Últimas notícias sobre mim" (antes do Footer)
- Subir `image-2.png` (post TNT) como asset → `src/assets/ultimas-noticias.png.asset.json`.
- Criar `src/components/sections/News.tsx`:
  - `SectionHeader` com eyebrow "Notícias" e título **"Últimas notícias sobre mim"** (só essa frase, sem texto extra).
  - Um único card centralizado exibindo a montagem, com `object-position` ajustado para esconder a barra de status do print, moldura `glass-card` + glow accent, hover sutil (scale 1.02).
- Registrar `<News />` em `src/routes/index.tsx` entre `<Hobbies />` e `<Footer />`.
- Adicionar link "Notícias" → `#noticias` em `src/components/sections/Nav.tsx`.

## Arquivos
- novos: 2 `.asset.json`, `News.tsx`
- editados: `Hero.tsx`, `routes/index.tsx`, `Nav.tsx`

## Não muda
Textos das demais seções, design tokens, fontes, cores, build/deploy. **Nada será publicado** — alterações ficam só no preview até você publicar manualmente.
