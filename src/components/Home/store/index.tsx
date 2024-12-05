import { HomeProps } from "@/utils/types/home";
import cardStyles from '@/utils/styles/card.module.scss'
import Image from "next/image";
import { FaStoreAlt } from "react-icons/fa";
import Link from "next/link";

export function Store({object}: HomeProps){
    return(
        <section id="lojinha" className={cardStyles.container}>
            <h1><FaStoreAlt size={30}/>Lojinha Caju</h1>
            <ul className={cardStyles.ul}>
                {object.metadata.lojinha_caju.map( (item, index) => (
                    <Link key={index} href={`/item/${index}`} className={cardStyles.link}>
                        <li key={item.imagem.url} className={cardStyles.item}>
                            <div className={cardStyles.imageContainer}>
                                <Image
                                    src={item.imagem.url}
                                    alt={item.titulo}
                                    className={cardStyles.srcImage}
                                    quality={100}
                                    fill={true}
                                />
                            </div>
                            <p>{item.titulo}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </section>
    )
}