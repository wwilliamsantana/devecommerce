 
## E-commerce 

### Sobre

Neste projeto, trabalhei a partir de um layout disponibilizado no Figma, implementando primeiro a estrutura visual e, em seguida, desenvolvendo a lógica de roteamento entre as páginas. O principal objetivo foi colocar em prática conceitos do App Router do Next.js, explorar estratégias de otimização de performance e dar os primeiros passos na introdução de testes automatizados. 
<br><br>
O projeto simula uma vitrine de produtos, representando um e-commerce moderno com foco em responsividade e boas práticas de front-end. Ele destaca o uso de componentes reutilizáveis, carregamento dinâmico de dados e navegação fluida. Além disso, configurei uma integração contínua (CI) utilizando o GitHub Actions para executar os testes automaticamente a cada push no repositório.
<br><br>
Um dos focos principais foi componentizar ao máximo os trechos que exigem "use client", garantindo que apenas o necessário fosse renderizado no lado do cliente, preservando a performance da aplicação.


## Tecnologia usadas

- Nextjs 15.4.3
- React 19.1.0
- Tailwind 4
- Typescript 5
- Eslint 9
- Cypress 14.5.3
- Zod 4.0.8

## Execução do projeto

**Requer o NODE (npm) e o GIT instalado!**
~~~javascript
 1. git clone github.com/wwilliamsantana/devecommerce.git
 2. cd .\devecommerce\
 3. npm install
 4. npm  run dev
~~~~

Precisamo de um arquivo .env.local contendo algumas variáveis como:
NEXT_PUBLIC_API_BASE_URL="http://localhost:3000"
API_BASE_URL="http://localhost:3000"



### Página - Home
<img style="width: 75%;" alt="Screenshot 2025-07-31 at 14-46-59 Home Devstore" src="https://github.com/user-attachments/assets/859bde3f-6e40-44cf-a964-7b8516b494be" />

### Página - Home: Skeleton 
<img style="width: 75%;" alt="Screenshot 2025-07-31 at 14-50-50 Home Devstore" src="https://github.com/user-attachments/assets/500a996e-9ab2-476e-89ac-3b6e9da84f27" />

### Página do porduto
<img style="width: 75%;" alt="Screenshot 2025-07-31 at 14-51-07 Moletom Never Stop Learning Devstore" src="https://github.com/user-attachments/assets/545ade37-dfda-4f2a-8dec-32b8cadd039e" />

### Página do porduto: Skeleton 
<img style="width: 75%;" alt="Screenshot 2025-07-31 at 14-50-59 " src="https://github.com/user-attachments/assets/4c65acc0-2277-4086-a3c7-79e42f8432de" />

### Página de busca de produtos específicos 

<img style="width: 75%;" alt="Screenshot 2025-07-31 at 15-03-23 Devstore" src="https://github.com/user-attachments/assets/9ec02023-98d8-46a5-8924-b5a93b396f17" />

### Página de busca de produtos específicos: Skeleton 

<img style="width: 75%;" alt="Screenshot 2025-07-31 at 14-50-18 Devstore" src="https://github.com/user-attachments/assets/67e8e83a-cf7b-46d2-82e3-a4fc66cb2ad3" />






