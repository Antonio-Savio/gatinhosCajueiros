import { rest } from 'msw'
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/Home/hero';

// // Mock do servidor
// const server = setupServer(
//   rest.get(
//     `${process.env.NEXT_PUBLIC_API_URL}/objects/674912653dbd639ab303fc30`,
//     (req, res, ctx) => {
//       return res(
//         ctx.json({
//           slug: 'gatinhos-cajueiros',
//           title: 'Gatinhos Cajueiros',
//           type: 'home',
//           metadata: {
//             texto_do_topo: {
//               titulo: '“Adotar um animal é ser um anjo. Que tal ser o nosso annjinho?”',
//               subtitulo: '❌ NÃO ACOLHEMOS \n❌ NÃO SOMOS ONG',
//             },
//             rede_social: {
//               nome_do_botao: '@gatinhoscajueiros',
//               url: 'https://www.instagram.com/gatinhoscajueiros/',
//             },
//           },
//         })
//       );
//     }
//   )
// );

// // Ativa o servidor antes de todos os testes
// beforeAll(() => server.listen());

// // Reseta os handlers após cada teste
// afterEach(() => server.resetHandlers());

// // Desativa o servidor após todos os testes
// afterAll(() => server.close());

describe('Hero component', () => {
  it('should render data from API', async () => {
    render(
      <Hero
        titulo="“Adotar um animal é ser um anjo. Que tal ser o nosso annjinho?”"
        subtitulo="❌ NÃO ACOLHEMOS ❌ NÃO SOMOS ONG"
        nome_botao="@gatinhoscajueiros"
        url_botao="https://www.instagram.com/gatinhoscajueiros/"
      />
    );

    // Verifica se o título é renderizado corretamente
    const h1 = await screen.findByText('Adotar um animal', { exact: false });
    expect(h1).toBeInTheDocument();

    // Verifica o botão com o nome correto
    const button = await screen.findByText('@gatinhoscajueiros');
    expect(button).toBeInTheDocument();
  });
});
