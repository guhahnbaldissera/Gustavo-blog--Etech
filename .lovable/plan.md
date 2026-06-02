Duas mudanças:

**1. Correção de texto em `src/components/sections/Sports.tsx`**

Trocar o parágrafo do card "Basquete" de:

> Campeão dos Jogos Escolares de Santa Catarina (JESC) nas etapas microrregional e regional de xadrez. A modalidade contribuiu para o desenvolvimento do raciocínio estratégico, concentração e tomada de decisões.

para:

> A modalidade contribuiu muito para eu desenvolver raciocínio estratégico, concentração e tomada de decisões.

**2. Ajuste de configuração para o deploy no Cloudflare**

O erro do `npx wrangler deploy` acontece porque hoje o `wrangler.jsonc` aponta `main` para `src/server.ts`, que contém imports virtuais do TanStack Start (`#tanstack-router-entry`, `#tanstack-start-entry`, etc.) que só existem dentro do pipeline do Vite. O Wrangler sozinho não resolve esses módulos.

O build do Vite já gera um worker pronto em `dist/server/` com seu próprio `wrangler.json` correto (`main: index.mjs`, assets em `../client`, `no_bundle: true`). Esse é o artefato que deve ser publicado.

Ajustes propostos:

- Adicionar um script em `package.json`:

```json
"deploy": "vite build && wrangler deploy --config dist/server/wrangler.json --cwd dist/server"
```

- Não alterar `vite.config.ts` nem `src/server.ts` (estão corretos).
- Manter `wrangler.jsonc` da raiz apenas como referência para `wrangler dev`; o deploy real passa a usar o config gerado em `dist/server/wrangler.json`.

Depois disso, o fluxo correto para publicar manualmente no Cloudflare passa a ser:

```bash
bun run deploy
```

Observação: o caminho mais simples e recomendado segue sendo o botão **Publish** do Lovable, que já executa esse pipeline automaticamente. O ajuste acima só é necessário se você quiser fazer self-host manual no Cloudflare.