# :construction: Projeto StarWars Planet Search Typescript :construction:
O projeto consiste em uma aplicação web para visualização e filtragem de informações sobre planetas do universo Star Wars. Abaixo estão detalhes sobre as principais funcionalidades e as tecnologias utilizadas:

## Funcionalidades Principais:
### Listagem de Planetas: 
A aplicação exibe uma lista de planetas com informações como nome, período de rotação, período orbital, diâmetro, clima, gravidade, terreno, superfície da água, população, filmes associados, data de criação, data de edição e URL.

### Filtragem por Nome: 
Os usuários podem filtrar os planetas pelo nome, digitando no campo de filtro correspondente. A lista de planetas é atualizada dinamicamente conforme o usuário digita.

### Filtragem por Valores Numéricos: 
Os usuários podem filtrar os planetas com base em valores numéricos de diferentes atributos, como população, diâmetro, período de rotação, etc. Eles podem especificar o tipo de comparação (maior que, menor que, igual a) e o valor desejado.

### Remoção de Filtros: 
Os usuários podem remover os filtros aplicados individualmente ou limpar todos os filtros de uma vez.

## Tecnologias Utilizadas:
### React: 
A aplicação é desenvolvida utilizando React, uma biblioteca JavaScript de código aberto para construção de interfaces de usuário.

### TypeScript: 
TypeScript é utilizado para adicionar tipagem estática ao JavaScript, melhorando a detecção de erros durante o desenvolvimento e a manutenibilidade do código.

### Context API: 
A Context API do React é utilizada para gerenciamento de estado global na aplicação, permitindo o compartilhamento de dados entre os diferentes componentes.

### Fetch API: 
A Fetch API é utilizada para realizar requisições HTTP para uma API externa (SWAPI - Star Wars API) a fim de obter informações sobre os planetas.

### CSS: 
O estilo da aplicação é escrito utilizando CSS puro, proporcionando uma aparência agradável e responsiva.

### Jest e React Testing Library: 
Jest e React Testing Library são utilizados para escrever e executar testes unitários, garantindo a qualidade e a robustez do código.

### Cypress: 
Cypress é utilizado para escrever e executar testes de integração e end-to-end, garantindo a funcionalidade adequada da aplicação em diferentes cenários de uso.