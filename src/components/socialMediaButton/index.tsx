import styles from './styles.module.scss'
import { FaInstagram } from 'react-icons/fa';

export function SocialMediaButton(){
    return(
        <a 
            href='https://www.instagram.com/gatinhoscajueiros/'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.link}
        >
            <FaInstagram size={20}/> Siga-nos no Instagram
        </a>
    )
}