# CF Tour

Frontend em React + TypeScript + Vite, Tailwind CSS e Motion. Sem backend ou banco de dados.

## Desenvolvimento

Requer Node.js 22 e npm.

```sh
npm ci
npm run dev
```

Abrir o endereço local informado pelo Vite, normalmente http://127.0.0.1:5173.

```sh
npm run build
npm run preview
```

## Funcionalidades

Hero com troca de destino, filtros, detalhes em modal, planejador de quatro etapas com resumo copiável e e-mail, menu mobile e FAQ. Escolhas ficam apenas em memória. Suporte a movimento reduzido e foco visível.

## Estrutura do front (src)

- `main.tsx`: bootstrap. `App.tsx`: composição da página e dos dialogs.
- `data/`: conteúdo e textos (destinos, FAQ, nav, serviços, planejador, contato).
- `components/layout`, `components/sections`, `components/destinations`, `components/dialogs` (+ `planner/`): UI.
- `hooks/`: `useScrolled`, `useModalDialog`, `usePlanner`. `lib/`: `motion` e `planner` (resumo e mailto).
- `types.ts`: tipos compartilhados.
- `styles/`: `index.css` importa `base`, `layout`, `sections`, `dialogs` e `responsive`.

## Vercel

Importar o repositório na Vercel. Usar a pasta deste package.json como raiz, preset Vite, comando npm run build e saída dist. Sem variáveis de ambiente. Publicação ainda não executada nesta sessão.

## Pendências

Contexto e layout estão em ../contexto, fora deste repositório Git, conforme organização solicitada. Lettering CF TOUR provisório até receber logo oficial. Fotos são ilustrativas; destinos não representam ofertas ou disponibilidade. WhatsApp pendente; contatos atuais por e-mail e Instagram. Galeria de clientes aguarda material autorizado.

## Imagens

Fotografias do CDN Unsplash, armazenadas localmente em public/images:

- rio.jpg: https://images.unsplash.com/photo-1483729558449-99ef09a8c325
- italia.jpg: https://images.unsplash.com/photo-1533105079780-92b9be482077 (foto de Santorini; nome técnico legado)
- cruzeiro.jpg: https://images.unsplash.com/photo-1548574505-5e239809ee19
- paris.jpg: https://images.unsplash.com/photo-1502602898657-3e91760cbb34

Referência de licença: https://unsplash.com/license. Substituir por material aprovado da marca quando disponível.
