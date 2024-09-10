# JackExperts Code Challenge

Bem vindo(a) ao MyTodoApp! Uma aplicação web fullstack desenvolvida exclusivamente para o desafio da Jack Experts.

# Preparando seu ambiente 

- [Instale o Node.js](https://nodejs.org/en/download/)
  - Rode [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) para instalar o Node.js caso ainda não tenha instalado.

> Este projeto utiliza Node.js + Express + Prisma + MySQL no backend e Vite + React no frontend!

# Preparando os testes

Com a intenção de facilitar a avaliação, os testes e garantir o deploy da minha API, decidi separar as responsabilidades da seguinte forma:

## Testando o frontend

-  Use este mesmo repositório para testar e avaliar o frontend desta aplicação.
-  Na raiz da pasta frontend, abra o terminal siga os passos:

Instale todas as dependências:
```
npm install
```

Rode a aplicação no seu navegador:
```
npm run start
```

## Testando o backend

-  Entre neste repositório para testar e avaliar o backend (TodoAPI) desta aplicação -> https://github.com/Guscaleman/todo-api
-  Na raiz da pasta backend, abra o terminal e siga os passos:

Instale todas as dependências:
```
npm install
```
Como estamos em um ambiente de teste, crie um .env.test de acordo com o .env.example e preencha o JWT_SECRET com uma string aleatória.
Crie um banco de dados MySQL na sua máquina e aponte o mesmo no DATABASE_URL do .env.test, seguindo o padrão:

> DATABASE_URL="mysql://[usuário]:[senha]@localhost:3306/[nome_do_banco_de_dados]"

Então faça a migração:
```
npm run migrate:test
```

Após a migração bem sucedida, rode os testes de integração:
```
npm run test
```

Seu terminal deve mostrar os 47 testes bem sucedidos.

# Apresentação da aplicação

O MyTodoApp é composta por uma Single Page Application que consome a TodoAPI utilizando o Axios. Graças ao React foi possível criar 3 rotas na aplicação, são elas: LoginPage, RegisterPage e DashboardPage.

O roteamento foi feito de forma que não é possível acessar o DashboardPage a não ser que o login seja feito, que por sua vez necessita que o cadastramento seja realizado. 

> (Experimente acessar "/dashboard" na url do seu navegador enquanto estiver no login ou cadastro 👀)

Uma vez que o cadastro e o login são feitos, o usuário passa a ter um token que o autoriza a listar, criar, editar e deletar suas tarefas.

> (Experimente apagar ou alterar o token do localStorage do seu navegador enquanto estiver no dashboard 👀)

Enquanto seu token existir, o usuário será logado automaticamente e direcionado ao seu dashboard, sendo necessário deslogar caso queira voltar nas outras páginas. 

> (Experimente acessar "/" ou "/register" enquanto estiver no dashboard 👀)

# Decisões tomadas durante o desenvolvimento

O backend foi desenvolvido antes do frontend ser feito.

O Prisma foi escolhido para conectar com o banco de dados pois proporciona integração com o TypeScript e abstrai complexidades de interagir diretamente com instruções e query SQL.

A biblioteca dotenv foi escolhida pois permite separar os ambientes de teste, desenvolvimento e produção, tornando toda a aplicação mais flexível e facilitando a gestão das variáveis de ambiente nos scripts do package.json.

O Tailwindcss foi escolhido como biblioteca de estilização por suas ferramentas modernas e possibilidade de organizar melhor o código.

O Zod foi escolhido pois é uma biblioteca que permite criar esquemas de validação no backend e permite "monitorar" o preenchimento dos dados dos formulários no frontend.

O React Context foi escolhido pois centraliza todas as requisições do frontend com a API de acordo com o contexto, evitando assim o temido "prop drilling".

Também vale destacar que no frontend foram utilizados somente 7 dos 11 endpoints criados no backend.

Decidi também subir o arquivo docker-compose no repositório para mostrar que houve uma tentativa de deploy dos containers criados no Docker utilizando kubernetes e AWS, porém sem sucesso.

Por fim, decidi fazer o deploy somente da API, utilizando o Railway, para que a aplicação ficasse o mais rápida possível em termos de tempo de resposta das requisições.

# Considerações finais

Agradeço por essa oportunidade de me juntar ao time da JackExperts, pois aprendi muitos conceitos novos no decorrer deste desafio. Sendo assim fico no aguardo do seu feedback da minha aplicação.

Abraços! 
