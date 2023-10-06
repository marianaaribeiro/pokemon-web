## Descrição

É um projeto que tem o objetivo de listar, favoritar e ver todos os detalhes de cada pokemon.

## Funcionalidades

Protejo Pokemon:

- Lista todos os pokemons na tela inicial
- A tela inicial tem uma paginação "Ver mais" que vai adicionando mais itens a lista
- O usuário pode ver o detalhe de cada pokemon ao clicar no card da pagina inicial
- O usuário pode adicionar um pokemon por vez a sua lista de favoritos
- O usuário pode visualizar a sua lista de favoritos

## Tecnologia usada

- React
- TypeScript
- TailwindCss
- Hook
- Jest
- Axios
- React Router Dom
- Vite
- Prettier
- Eslint

## Etapas para instalação do projeto

O primeiro passo é escolher como deseja criar o seu arquivo env, abaixo tem o passo a passo das opções de como criar:

- Deve criar um arquivo na sua pasta raiz chamado de .env e colocar os seguinte conteúdo:

VITE_API_URL=https://pokeapi.co/api/v2/

- Caso ao clonar o projeto já exita o arquivo env, então renomeia o arquivo colocando um ponto antes do nome do arquivo, exemplo: .env

- Outra opção é olhar o arquivo .env-sample que mostra o exemplo de como deve ficar, então apenas deve renomear o arquivo para .env

Segundo passo é executar o comando para instalar as dependências:

- caso não tenha instalado ainda o yarn, execute este comando no seu terminal: npm install --global yarn

Agora pode executar o yarn para instalar as dependências:

- yarn

inicializa o projeto em modo de desenvolvimento. Abre em http://localhost:3000 :

- yarn start

executa todos os testes:

- yarn test

## Arquitetura

- src
  - **tests**
  - assets
  - styles
  - components
  - contexts
  - hooks
  - pages
  - pages/\*/blocks
  - routes
  - services

### Pasta SRC

A pasta Source, a fonte de tudo que conterá nossa aplicação.

### **tests**

Essa pasta contém os arquivos de teste.

## Assets

Essa pasta contém as imagens e ícones.

## Styles

Essa pasta contém os css globais da aplicação

### Contexts

Essa pasta contém todos os contextos da aplicação. Contexto (context) disponibiliza uma forma de passar dados entre a árvore de componentes sem precisar passar props manualmente em cada nível.

### Hooks

Essa pasta se destina ao custom hooks, qualquer custom hook criado para utilizar na aplicação deverá ficar nessa pasta.

### Routes

Nesta pasta vamos criar o index para ser a interface com o entry point para terá acesso às rotas da aplicação.

### Services

Esta pasta é responsável por conter todos os serviços da aplicação garantindo que todo código que faça requisições para apis sejam armazenados aqui.

## Camadas de apresentação

### Pages

As pages podem ser consideradas container, a parte "inteligente". Ele carrega os dados, manipula o state e entrega tudo mastigado para o componente de apresentação exibí-los.

Pages é o primeiro nível de composição dos 3 propostos neste padrão proposto.

### Pages/\*\*/Blocks

Esta pasta é responsável por armazenar todos os componentes que farão a composição das páginas. Aqui onde as regras de negócio serão escritas, estes componentes podem receber propriedade dos componentes pais como as páginas, para manipular estados do contexto dos componentes pais e são compostos por células e átomos.

Este é o segundo nível do padrão proposto neste projeto.

### Components

Um componente de apresentação (presentational component), cuida da parte do render. Todos os dados que ele precisa para fazer o render ele recebe via props.

Este é o terceiro e último nível do padrão proposto.
