import { rest } from 'msw'
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/Home/hero';

describe('Home page', () => {
  // Mock do servidor
  const server = setupServer(
    rest.get(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/674912653dbd639ab303fc30`,
      (req, res, ctx) => {
        return res(
          ctx.json({
            slug: 'gatinhos-cajueiros',
            title: 'Gatinhos Cajueiros',
            type: 'home',
            metadata: {
              texto_do_topo: {
                titulo: '“Adotar um animal é ser um anjo. Que tal ser o nosso anjinho?”',
                subtitulo: '❌ NÃO ACOLHEMOS \n❌ NÃO SOMOS ONG',
              },
            },
          })
        );
      }
    )
  );
  
  // Ativa o servidor antes de todos os testes
  beforeAll(() => server.listen());
  
  // Reseta os handlers após cada teste
  afterEach(() => server.resetHandlers());
  
  // Desativa o servidor após todos os testes
  afterAll(() => server.close());

  
  it('should render data from API', async () => {
    render(<Hero titulo='Adotar um animal é ser' subtitulo='❌ NÃO ACOLHEMOS \n❌ NÃO SOMOS ONG' bannerUrl='' />);

    const h1 = await screen.findByText('Adotar um animal', { exact: false });
    expect(h1).toBeInTheDocument();
  });
});
