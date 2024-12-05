import { HomeProps } from "@/utils/types/home";
import styles from './styles.module.scss'
import { BiDonateHeart } from "react-icons/bi";

export function HowToHelp({ object }: HomeProps){
    return(
        <section className={styles.section} id="comoajudar">
            <h1><BiDonateHeart size={35} />Como Ajudar</h1>
            <p>{object.metadata.como_ajudar.texto_como_ajudar}</p>
            <div className={styles.donationContainer}>
                <h3>Doações</h3>
                {object.metadata.como_ajudar.opcoes_de_doacao.map( (item, id) => (
                    <div key={id} className={styles.donation}>
                        <strong>{item.meios_de_doacao}: </strong>
                        <span>{item.valor}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}