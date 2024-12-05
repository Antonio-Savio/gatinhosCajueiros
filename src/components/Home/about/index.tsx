import styles from './styles.module.scss'
import { PiCatBold } from "react-icons/pi";

interface DataProps{
    data: string;
}

export function About({ data }: DataProps){
    return(
        <section id='quemsomos' className={styles.quemsomos}>
            <h1><PiCatBold size={35} /> Quem Somos</h1>
            <p>{data}</p>
        </section>
    )
}