# Dev Ecommerce

Loja virtual desenvolvida com Next.js, com foco na experiência de navegação e na apresentação de produtos. O projeto permite explorar um catálogo, consultar detalhes dos produtos, realizar buscas e adicionar itens ao carrinho.

## Funcionalidades

- Exibição de produtos em destaque na página inicial.
- Página individual com informações e preços dos produtos.
- Busca de produtos por nome.
- Adição de produtos ao carrinho.
- Interface com layout responsivo e tema escuro.
- Testes automatizados de navegação, busca e carrinho com Cypress.

## Tecnologias

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Zod
- Cypress

## Executar localmente

### Pré-requisitos

- Node.js
- npm

### Instalação

Clone o repositório:

```bash
git clone https://github.com/wwilliamsantana/devecommerce.git
cd devecommerce
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env.local` na raiz do projeto e configure a URL da aplicação:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Testes

O projeto utiliza Cypress para testar fluxos de busca e adição de produtos ao carrinho.

Para abrir a interface de testes:

```bash
npx cypress open
```

## Estrutura do projeto

```text
src/
├── app/
│   ├── (store)/
│   │   ├── (home)/
│   │   ├── product/
│   │   └── search/
│   └── api/
│       └── products/
├── components/
├── context/
└── data/

cypress/
├── e2e/
└── support/
```

