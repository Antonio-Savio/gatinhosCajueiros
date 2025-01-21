<h1 align="center">Gatinhos Cajueiros</h1>

<ul>
  <li><a href="#pt">🇧🇷 Português</a></li>
  <li><a href="#eng">🇬🇧 English</a></li>
</ul>

<h3 align="center">Versão em português</h3>

<section id="pt">

## 💡 Sobre
Este website foi desenvolvido como um projeto freelance sem fins lucrativos para apoiar uma iniciativa voluntária que visa a alimentação, castração e adoção de gatos no Parque dos Cajueiros, em Aracaju-SE. Tem o objetivo de centralizar as informações e ajudar na divulgação dos gatos para adoção e dos produtos da lojinha do projeto. Todo conteúdo do site pode ser administrado por meio de um Sistema para Gerenciamento de Conteúdo (CMS).

## 🐈‍⬛ Conheça mais sobre o projeto:
<a href="https://www.instagram.com/gatinhoscajueiros/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white" alt="Instagram: @gatinhoscajueiros"></a>

## 🌎 Acesse a plataforma
[Gatinhos Cajueiros](https://gatinhos-cajueiros.vercel.app/)

## 💻 Visão Geral
<img src="public/gatinhos.gif" alt="Prévia Gatinhos Cajueiros" />
<img width="350px" src="public/gatinhos-mobile.gif" alt="Prévia em celular Gatinhos Cajueiros" />

## ✅ Funcionalidades
- **Gerenciamento de Conteúdo**: Todo o conteúdo da página é gerenciado através de um Headless CMS, o Cosmic.
- **Consumo de API**: Consumo de API gerada no CMS Cosmic.
- **Página Estática (SSG)**: Página estática com revalidação após um período de tempo.
- **Testes Unitários**: Realização de testes unitários usando React Testing Library.
- **Seções Principais**: Página principal com 4 seções: Adoção, Lojinha Caju, Como Ajudar e Quem Somos.
- **Navegação**: Links de navegação para as seções da página.
- **Menu Hambúrguer**: Menu hambúrguer em telas menores, exibindo os links de navegação ao ser clicado.
- **Rotas Dinâmicas**: Rota dinâmica para cada gato e cada item da loja.
- **Componentes Reutilizáveis**: Componentes de card, cabeçalho, rodapé e botão da rede social reaproveitados em lugares diferentes.
- **Metadatas Dinâmicas**: Metadatas dinâmicas para cada gato/item da loja.
- **Loader Animado**: Loader no carregamento das rotas.

## ⚙️ Tecnologias
- **Next JS**: estrutura de desenvolvimento baseada em React que oferece renderização do lado do servidor e geração de sites estáticos.
- **TypeScript**: garante a segurança de tipos, detecta erros durante o desenvolvimento, melhora a qualidade do código e aumenta a produtividade.
- **CSS modules**: permite que o arquivo CSS atribua nomes de classes delimitados localmente por padrão.
- **Cosmic CMS**: sistema de gerenciamento de conteúdo headless com uma API flexível e fácil integração com diversas plataformas.
- **React Testing Library**: biblioteca de testes para React que promove a prática de testar componentes da maneira como eles seriam usados pelos usuários.

## 📁 Estrutura do Projeto

O projeto está organizado na seguinte estrutura:

```
/public
/src
    /app                   # Arquivos principais e rotas
    /components            # Componentes reutilizáveis
    /utils                 # Requisições à API | estilos compartilhados | tipagem
```

- **/public**: Contém arquivos estáticos, como imagens, vídeos e outros recursos.
- **/src**: Diretório principal do código-fonte.
  - **/app**: Inclui os arquivos e rotas principais da aplicação.
  - **/components**: Contém componentes React reutilizáveis utilizados em toda a aplicação.
  - **/utils**: Abriga funções utilitárias, lógica de requisições à API, estilos compartilhados e tipos TypeScript.

## 🚀 Como rodar o projeto
### Requisitos
- Node.js instalado
- Gerenciador de pacotes npm ou yarn

### Passo a passo
1. Clone o repositório:

```bash
git clone https://github.com/Antonio-Savio/gatinhosCajueiros.git
```
2. Instale as dependências:

```bash
cd gatinhosCajueiros
npm install
```

3. Crie um arquivo .env na raiz do projeto e adicione todas suas configurações:
```bash
NEXT_PUBLIC_API_URL="YOUR_COSMIC_API_URL_HERE"
READ_KEY="YOUR_COSMIC_READ_KEY_HERE"

NEXT_PUBLIC_URL=http://localhost:3000
```

4. Rode o projeto localmente:

```bash
npm run dev
```
5. Acesse a aplicação em: http://localhost:3000.


## 📄 Licença
Este projeto é licenciado sob a [Licença MIT](LICENSE).

Você é livre para usar, modificar e distribuir este software para fins pessoais e comerciais, desde que a licença original e o aviso de direitos autorais sejam incluídos. Não há garantia para o código fornecido, e o autor não é responsável por quaisquer problemas decorrentes do uso deste software.

</section>

<br/>

---
<br/>

<h3 align="center">English version</h3>

<section id="eng">

## 💡 About
This website is a non-profit freelance project I created for a voluntary initiative focused on feeding, neutering, and adopting cats in Parque dos Cajueiros, Aracaju-SE, Brazil. The aim is to centralize information and help promote cats for adoption and the project's store products. All site content can be updated through a Content Management System (CMS).

## 🐈‍⬛ Learn more about the project:
<a href="https://www.instagram.com/gatinhoscajueiros/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white" alt="Instagram: @gatinhoscajueiros"></a>

## 🌎 Access the platform
[Gatinhos Cajueiros](https://gatinhos-cajueiros.vercel.app/)

## 💻 Overview
<img src="public/gatinhos.gif" alt="Gatinhos Cajueiros Preview" />
<img width="350px" src="public/gatinhos-mobile.gif" alt="Gatinhos Cajueiros Mobile Preview" />

## ✅ Features
- **Content Management**: All page content is managed through a headless CMS, Cosmic.
- **API Consumption**: API consumption generated in the Cosmic CMS.
- **Static Site (SSG)**: Static page with revalidation after a period of time.
- **Unit Testing**: Unit testing using React Testing Library.
- **Main Sections**: Main page with 4 sections: Adoption, Lojinha Caju, How to Help, and About Us.
- **Navigation**: Navigation links to the page sections.
- **Hamburger Menu**: Only on smaller screens, showing navigation links when clicked.
- **Dynamic Routes**: Dynamic route for each cat and each store item.
- **Reusable Components**: Reusable card, header, footer, and social media button components used in different places.
- **Dynamic Metadata**: For each cat/store item.
- **Animated Loader**: Animated loader on page load.

## ⚙️ Technologies
- **Next.js**: a development framework based on React that offers server-side rendering and static site generation.
- **TypeScript**: ensures type safety, detects errors during development, improves code quality, and increases productivity.
- **CSS modules**: allows CSS file to assign locally scoped class names by default.
- **Cosmic CMS**: headless content management system with a flexible API and easy integration with various platforms.
- **React Testing Library**: testing library for React that promotes testing components in the way users interact with them.

## 📁 Project Structure

The project is organized in the following structure:

```
/public
/src
    /app                   # Main files and routes
    /components            # Reusable components
    /utils                 # API requests | shared styles | types
```

- **/public**: Contains static files such as images, videos, and other assets.
- **/src**: Main source code directory.
  - **/app**: Includes the primary files and routes of the application.
  - **/components**: Houses reusable React components used across the application.
  - **/utils**: Contains utility functions, API request logic, shared styles, and TypeScript types.

## 🚀 How to run the project
### Requirements
- Node.js installed
- npm or yarn package manager

### Steps
1. Clone the repository:

```bash
git clone https://github.com/Antonio-Savio/gatinhosCajueiros.git
```
2. Install the dependencies:

```bash
cd gatinhosCajueiros
npm install
```

3. Create a `.env` file in the project root and add all your configurations:
```bash
NEXT_PUBLIC_API_URL="YOUR_COSMIC_API_URL_HERE"
READ_KEY="YOUR_COSMIC_READ_KEY_HERE"

NEXT_PUBLIC_URL=http://localhost:3000
```

4. Run the project locally:

```bash
npm run dev
```
5. Access the application at: http://localhost:3000.

## License 📄

This project is licensed under the [MIT License](LICENSE).

You are free to use, modify, and distribute this software for personal and commercial purposes, as long as the original license and copyright notice are included. There is no warranty for the code provided, and the author is not liable for any issues arising from the use of this software.

</section>