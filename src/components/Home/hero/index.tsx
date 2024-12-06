import styles from './syles.module.scss'
import Image from 'next/image';
import { SocialMediaButton } from '@/components/socialMediaButton';

interface HeroProps{
    titulo: string;
    subtitulo: string;
    bannerUrl: string;
}

export function Hero({ titulo, subtitulo, bannerUrl }: HeroProps){
    return(
        <main className={styles.main}>
            <div className={styles.containerHero}>
                <h1>{titulo}</h1>
                <h4>{subtitulo}</h4>
                <SocialMediaButton/>
            </div>

            <div className={styles.bannerWrapper}>
                <Image
                    src={bannerUrl}
                    alt='Imagem de fundo'
                    className={styles.banner}
                    priority={true}
                    quality={100}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        </main>
    )
}