export interface HomeProps{
    object: {
        slug: string;
        title: string;
        metadata: {
            texto_do_topo: {
                titulo: string;
                subtitulo: string;
                banner_img: {
                    url: string;
                }
            };
            animais_para_adocao: AdoptionProps[];
            lojinha_caju: ShopProps[];
            como_ajudar: {
                texto_como_ajudar: string;
                opcoes_de_doacao: DonationProps[];
            };
            quem_somos: string;
            whatsapp: {
                numero: number;
                titulo_adocao: string;
                titulo_loja: string;
            }
        }
    }
}

interface AdoptionProps{
    imagem: {
        url: string;
    };
    nome_animal: string;
    descricao: string;
}

interface ShopProps{
    imagem: {
        url: string;
    };
    titulo: string;
    preco: string
    descricao: string;
}

interface DonationProps{
    meios_de_doacao: string;
    valor: string;
}