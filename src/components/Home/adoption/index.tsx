import { HomeProps } from "@/utils/types/home"
import Image from "next/image"
import cardStyles from '@/utils/styles/card.module.scss'
import { TiHeart } from "react-icons/ti";
import styles from './styles.module.scss'
import Link from "next/link";

export function Adoption({ object }: HomeProps){
    return(
        <section id="animais" className={cardStyles.container}>
            <h1><TiHeart className={styles.svg} size={40}/>Adote!</h1>
            <ul className={cardStyles.ul}>
                {object.metadata.animais_para_adocao.map( (pet, index) => (
                    <Link key={index} href={`/gato/${index}`} className={cardStyles.link}>
                        <li className={cardStyles.item}>
                            <div className={cardStyles.imageContainer}>
                                <Image
                                    src={pet.imagem.url}
                                    alt={pet.nome_animal}
                                    className={cardStyles.srcImage}
                                    quality={100}
                                    fill={true}
                                />
                            </div>
                            <p>{pet.nome_animal}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </section>
    )
}