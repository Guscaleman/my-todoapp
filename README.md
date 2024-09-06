# JackExperts Code Challenge

Bem vindo(a) ao MyTodoApp! Uma aplicação web fullstack desenvolvida exclusivamente para o desafio da Jack Experts.

## Preparando seu ambiente 

- [Instale o Node.js](https://nodejs.org/en/download/)
  - Rode [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) para instalar o Node.js caso ainda não tenha instalado.

> Este projeto utiliza Node.js + Express + Prisma + MySQL no backend e Vite + React no frontend!

## Preparando os testes

-  Use este repositório para testar e avaliar o frontend desta aplicação.
-  Na raiz da pasta frontend, abra o terminal e execute:
> npm install (para instalar todas as dependências)

> npm run start (para rodar a aplicação no seu navegador)

-  Entre neste repositório para testar e avaliar o backend (TodoAPI) desta aplicação -> https://github.com/Guscaleman/todo-api
-  Na raiz da pasta backend, abra o terminal e execute:
> npm install (para instalar todas as dependências)
> npx prisma migrate (crie um banco de dados mysql na sua máquina e aponte o mesmo no DATABASE_URL antes de fazer a migração)
> npm run test (para rodar os testes de integração)

## Apresentação da aplicação

O MyTodoApp é composta por uma Single Page Application que consome a TodoAPI utilizando o Axios. Graças ao React foi possível criar 3 rotas na aplicação, são elas: LoginPage, RegisterPage e DashboardPage.
O roteamento foi feito de forma que não é possível acessar o DashboardPage a não ser que o login seja feito, que por sua vez necessita que o cadastramento seja realizado.
Uma vez que o cadastro e o login são feitos, o usuário passa a ter um token que o autoriza a listar, criar, editar e deletar suas tarefas.
Enquanto seu token existir, o usuário será logado automaticamente e direcionado ao seu dashboard, sendo necessário deslogar caso queira voltar nas outras páginas. (Faça o teste de apagar o token do localStorage do seu navegador enquanto estiver no dashboard 👀)

## Decisões tomadas durante o desenvolvimento

O backend foi desenvolvido antes do frontend ser feito.
O Tailwindcss foi escolhido como biblioteca de estilização por suas ferramentas modernas e possibilidade de organizar melhor o código.
O Zod foi escolhido pois é uma biblioteca que permite criar esquemas e "monitorar" o preenchimento dos dados dos formulários.
O React Context foi escolhido pois centraliza todas as requisições do frontend com a API de forma a evitar o "prop drilling".
Também vale destacar que no frontend foram utilizados somente 7 dos 11 endpoints criados no backend.

Decidi também subir o arquivo docker-compose no repositório para mostrar que houve uma tentativa de deploy dos containers criados no Docker.
Por fim, decidi fazer o deploy somente da API, utilizando o Railway, para que a aplicação ficasse o mais rápida possível em termos de tempo de resposta das requisições.

