Vou ajustar o fluxo de deploy para evitar que o Wrangler tente empacotar diretamente o arquivo-fonte do TanStack Start.

Plano:

1. Conferir a configuração existente
- Manter `vite.config.ts` usando `@lovable.dev/vite-tanstack-config` com `tanstackStart.server.entry = "server"`, pois isso já conecta o wrapper SSR correto ao build.
- Manter o projeto como SSR em Cloudflare Workers com assets, não como um deploy estático puro de Pages.

2. Corrigir o ponto de deploy do Wrangler
- Ajustar/remover a armadilha em `wrangler.jsonc` onde `main` aponta para `src/server.ts`.
- O problema acontece porque `npx wrangler deploy` na raiz tenta resolver imports virtuais internos do TanStack Start fora do pipeline Vite.
- A correção será fazer o deploy usar o worker gerado por `vite build`, em `dist/server/index.mjs`, junto com o `dist/server/wrangler.json` gerado automaticamente.

3. Ajustar scripts de deploy
- Garantir que `package.json` tenha um comando de deploy compatível, como:

```json
"deploy": "vite build && wrangler deploy --config dist/server/wrangler.json --cwd dist/server"
```

- Se necessário, adicionar um script auxiliar explícito para Cloudflare, por exemplo:

```json
"deploy:cloudflare": "vite build && wrangler deploy --config dist/server/wrangler.json --cwd dist/server"
```

4. Evitar aliases manuais incorretos
- Não vou criar aliases manuais para `#tanstack-router-entry`, `#tanstack-start-entry`, `tanstack-start-manifest:v` ou `tanstack-start-injected-head-scripts:v`.
- Esses módulos são virtuais e devem ser resolvidos pelo build do TanStack/Vite, não pelo Wrangler diretamente.
- A correção correta é mudar o comando/configuração de deploy, não “inventar” aliases para eles.

5. Validação
- Verificar que o build gera `dist/server/wrangler.json` apontando para `index.mjs`.
- Confirmar que o script final chama Wrangler com esse arquivo gerado.

Observação importante:
- Eu não consigo gerar commit diretamente daqui porque o ambiente bloqueia comandos Git stateful como `git add` e `git commit`.
- Posso deixar os arquivos corrigidos; depois você roda o commit localmente com a mensagem sugerida:

```bash
git add package.json wrangler.jsonc vite.config.ts
git commit -m "Fix Cloudflare deploy for TanStack Start SSR"
```