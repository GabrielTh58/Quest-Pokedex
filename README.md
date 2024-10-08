# Pokemon Pokedex

## Descrição do Projeto

Este projeto é uma aplicação de uma Pokedex utilizando a API [PokeAPI](https://pokeapi.co/). A aplicação permite que os usuários visualizem uma lista de pokemons, carreguem mais pokemons, e vejam detalhes específicos de cada pokemon, incluindo imagem, nome, lista de movimentos, habilidades e tipos.

Este projeto faz parte do curso **DevQuest**, servindo como um teste técnico para simular um processo seletivo de frontend.

## Funcionalidades

- **Listagem de Pokemons:** A página inicial mostra uma lista de 10 pokemons com imagem e nome.
- **Botão "Carregar mais":** Permite carregar mais 10 pokemons na listagem inicial.
- **Detalhes do Pokemon:** Cada pokemon na lista é clicável e redireciona para uma página de detalhes com informações completas.
- **Alternância de Tema:** Botão para alternar entre tema claro e escuro utilizando Context API.
- **Filtro por Tipo:** Campo de filtro para listar pokemons de um tipo específico.

## Ferramentas Utilizadas

- **React.js:** Para construção da SPA.
- **Context API:** Para gerenciamento de estado global do tema e outras funcionalidades.
- **Styled-components:** Para estilização dos componentes com suporte a temas.
- **React-router-dom:** Para navegação entre as páginas.

## Decisões Técnicas

- **SPA:** Utilização de uma aplicação de página única para melhorar a experiência do usuário com transições suaves entre páginas.
- **Context API:** Escolhido para gerenciamento de temas devido à sua simplicidade e facilidade de integração com React.
- **Styled-components:** Escolhido para permitir estilos dinâmicos e tema adaptável.
- **React-router-dom:**  Para navegação entre as páginas da aplicação.

## Solução

![GIF](./src/assets/pokedex.gif)

## Deploy

[Visualize aqui](https://gco-quest-pokedex.vercel.app)

## Instalação e Uso

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:

    ```sh
    git clone https://github.com/GabrielTh58/.git
    ```

2. Navegue até o diretório do projeto:

    ```sh
    cd Quest-Pokedex
    ```

3. Instale as dependências:

    ```sh
    npm install
    ```

4. Inicie o servidor de desenvolvimento:

    ```sh
    npm run dev
    ```

5. Abra o navegador e vá para:

    ```sh
    http://localhost:3000
    ```
