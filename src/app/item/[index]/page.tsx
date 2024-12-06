import { Container } from "@/components/container"
import Image from "next/image"
import { getDataHome } from "@/utils/actions/get-data"
import { HomeProps } from "@/utils/types/home"
import detailStyles from '@/utils/styles/detailPage.module.scss'
import styles from './styles.module.scss'
import { FaWhatsapp } from "react-icons/fa"
import { redirect } from "next/navigation"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

const { object }: HomeProps = await getDataHome()

export async function generateMetadata(
    props: {
        params: Promise<{ index: string }>
    }
): Promise<Metadata>{
    const { index } = await props.params

    try{
        const item = object.metadata.lojinha_caju[Number(index)]

        return {
            title: `${item.titulo} - Gatinhos Cajueiros`,
            description: `${item.descricao.slice(0, 100)}...`,
            openGraph: {
                title: "Gatinhos Cajueiros",
                images: [item.imagem.url]
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
    } catch {
        return {
            title: "Gatinhos Cajueiros"
        }
    }
}


function isParamValid(object: HomeProps['object'], index: string){
    const productExists = object.metadata.lojinha_caju.find((item, id) => id === Number(index))
    if(!productExists){
        redirect('/')
    }
}

export default async function StoreItem(
    props: {
        params: Promise<{ index: string }>
    }
){
    const { index } = await props.params
    isParamValid(object, index)

    const item = object.metadata.lojinha_caju[Number(index)]
    const whatsapp = object.metadata.whatsapp

    return(
        <>
        <Container>
            <main className={detailStyles.container}>
                <h1>{item.titulo}</h1>
                <div className={detailStyles.content}>
                    <div className={detailStyles.imgWrapper}>
                        <Image
                            src={item.imagem.url}
                            alt={`Imagem de ${item.titulo}`}
                            fill={true}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className={detailStyles.catImg}
                        />
                    </div>

                    <div>
                        <p className={styles.price}>
                            <strong>Valor: </strong>{item.preco}
                        </p>
                        <p className={detailStyles.description}>
                            {item.descricao}
                        </p>
                        <a 
                            href={`https://api.whatsapp.com/send?phone=55${whatsapp.numero}&text=Olá! Vi no site que o(a) ${item.titulo} está disponível e me interessei! ❤️`}
                            className={detailStyles.link}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaWhatsapp size={20}/> {whatsapp.titulo_loja}
                        </a>
                    </div>
                </div>
            </main>
        </Container>

        <Footer/>
        </>
    )
}