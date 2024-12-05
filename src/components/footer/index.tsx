import styles from './styles.module.scss'
import { SocialMediaButton } from '../socialMediaButton'

export function Footer(){
    return(
        <footer className={styles.footer}>
            <SocialMediaButton/>
            <p>&copy; {new Date().getFullYear()}. Todos os direitos reservados.</p>
        </footer>
    )
}