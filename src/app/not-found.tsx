import Link from "next/link";
import styles from '@/utils/styles/not-found.module.scss'

export default function NotFound(){
    return(
        <main className={styles.wrapper}>
            <p>Essa página não existe!</p>
            <Link href='/'>
                Voltar para Home
            </Link>
        </main>
    )
}