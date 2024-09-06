# Jackexperts Code Challenge

Bem vindo(a) ao meu MyTodoApp! Uma aplicação web desenvolvida exclusivamente para o desafio da Jack Experts.

## Machine setup

- [Install Node.js](https://nodejs.org/en/download/)
  - Rode [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) para instalar o Node.js caso ainda não tenha instalado.

> Este projeto utiliza Node.js + Express + Prisma + MySQL no backend e Vite + React no frontend!

## Challenge setup

### Repository setup & process

-  Use este repositório para testar e avaliar o frontend desta aplicação.
-  Na raiz da pasta frontend, abra o terminal e execute:
> npm install (para instalar todas as dependências)
> npm run start (para rodar a aplicação no seu navegador)

-  Entre neste repositório para testar e avaliar o backend desta aplicação -> https://github.com/Guscaleman/todo-api
-  Na raiz da pasta backend, abra o terminal e execute:
> npm install (para instalar todas as dependências)
> npm run test (para rodar o teste de integração)

## What you need to deliver

A mini-application that allows event hosts to check people into an event.

The home page should show:

-  An event selector displaying each event's name. By default, it should display `Select an event` (`communities` collection).
-  A list of people registered in the selected event (`people` collection).

The list of people should allow the event host to:

-  See the full name (first and last name together), company name, title, check-in date, and check-out date in the `MM/DD/YYYY, HH:mm` format or as `N/A`.
-  Check people into the event by clicking the `Check-in {person firstName and lastName}` button.
-  If the user was checked in over five seconds ago, show a `Check-out {person firstName and lastName}` button.

Between the event selector and the list of people, display a summary like this:

-  `People in the event right now: 10`
-  `People by company in the event right now: Green Group (10), Hoppe Group (5)`
-  `People not checked in: 200`

The page needs to be reactive -- no refresh should be needed to display the latest data.

## Implementation rules

-  Use Meteor as the builder and runner, React as the view layer, and MongoDB as the data layer.
-  Use MongoDB embedded in Meteor; don't configure the project to access a different MongoDB URL.
-  Style the application using TailwindCSS.
-  Do not insert new documents into the `communities` or `people` collections.
-  Do not change `initial-data.js`.
-  You can add new dependencies.

## Important

-  We encourage the use of AI tools to generate code, but the developer needs to understand all the code generated and be able to: a) explain the code and b) explain why it's the best choice for the use case. If during the interview we realize you don't understand any part of the code you used in your solution, you will be eliminated from the process. The same applies to any question we ask during the video interview.
-  An automatic process will check your solution. Follow the requirements closely; only submissions that pass the tests will be considered.
-  We will not answer any questions about this challenge to ensure all submissions are fairly compared.

## How to deliver your challenge

-  Complete this challenge via a [GitHub Classroom assignment](https://classroom.github.com/a/tPo4AdKE).
-  Is your solution ready for review? Respond to this [form](https://forms.gle/m2FTwSG8bcMfhS3JA).
-  Our team will review your submission and provide feedback via PR or email within 15 work days.
