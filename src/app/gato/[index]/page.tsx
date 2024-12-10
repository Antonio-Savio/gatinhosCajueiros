import detailStyles from '@/utils/styles/detailPage.module.scss'
import styles from './styles.module.scss'
import { getDataHome } from '@/utils/actions/get-data'
import { HomeProps } from '@/utils/types/home'
import { Metadata } from 'next'
import { Container } from '@/components/container'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import { Footer } from '@/components/footer'

const { object }: HomeProps = await getDataHome()

export async function generateMetadata(
    props: {
        params: Promise<{ index: string }>
    }
): Promise<Metadata> {
    const { index } = await props.params

    try {
        const cat = object.metadata.animais_para_adocao[Number(index)]

        return {
            title: `${cat.nome_animal} - Gatinhos Cajueiros`,
            description: `${cat.descricao.slice(0, 100)}...`,
            openGraph: {
                title: `${cat.nome_animal} - Gatinhos Cajueiros`,
                images: [cat.imagem.url]
            },
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                    index: true,
                    follow: true,
                    noimageindex: true,
                }
            }
        }

    } catch{
        return {
            title: "Gatinhos Cajueiros"
        }
    }
}

export default async function Gato(
    props: {
        params: Promise<{ index: string }>
    }
){
    const { index } = await props.params
    isParamValid(object, index)
    
    const cat = object.metadata.animais_para_adocao[Number(index)]
    const whatsapp = object.metadata.whatsapp

    return(
        <>
           <Container>
                <main className={detailStyles.container}>
                    <h1>{cat.nome_animal}</h1>
                    <div className={detailStyles.content}>
                        <div className={detailStyles.imgWrapper}>
                            <Image
                                src={cat.imagem.url}
                                alt={`Imagem de ${cat.nome_animal}`}
                                fill={true}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className={detailStyles.catImg}
                            />
                        </div>

                        <div>
                            <p className={styles.description}>
                                {cat.descricao}
                            </p>
                            <a 
                                href={`https://www.instagram.com/direct/t/17842587092150636`}
                                className={detailStyles.link}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <FaInstagram size={20}/>Tire suas dúvidas pelo Direct
                            </a>
                        </div>
                    </div>
                </main>
            </Container>
            <Footer/>
        </>
    )
}

function isParamValid(object: HomeProps['object'], index: string){
    const catExists = object.metadata.animais_para_adocao.find((item, id) => id === Number(index))
    if(!catExists){
        redirect('/')
    }
}