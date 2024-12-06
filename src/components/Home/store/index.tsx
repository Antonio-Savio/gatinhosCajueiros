import { HomeProps } from "@/utils/types/home";
import cardStyles from '@/utils/styles/card.module.scss'
import Image from "next/image";
import { FaStoreAlt } from "react-icons/fa";
import { Card } from "@/components/card";

export function Store({object}: HomeProps){
    return(
        <section id="lojinha" className={cardStyles.container}>
            <h1><FaStoreAlt size={30}/>Lojinha Caju</h1>
            <ul className={cardStyles.ul}>
                {object.metadata.lojinha_caju.map( (item, index) => (
                    <Card
                        key={index}
                        pageRoute='item'
                        title={item.titulo}
                        imageUrl={item.imagem.url}
                        id={index}
                    />
                ))}
            </ul>
        </section>
    )
}