import { HomeProps } from "@/utils/types/home"
import Image from "next/image"
import cardStyles from '@/utils/styles/card.module.scss'
import { TiHeart } from "react-icons/ti";
import styles from './styles.module.scss'
import Link from "next/link";
import { Card } from "@/components/card";

export function Adoption({ object }: HomeProps){
    return(
        <section id="animais" className={cardStyles.container}>
            <h1><TiHeart className={styles.svg} size={40}/>Adote!</h1>
            <ul className={cardStyles.ul}>
                {object.metadata.animais_para_adocao.map( (pet, index) => (
                    <Card
                        key={index}
                        pageRoute='gato'
                        id={index}
                        title={pet.nome_animal}
                        imageUrl={pet.imagem.url}
                    />
                ))}
            </ul>
        </section>
    )
}