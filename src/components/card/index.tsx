import Image from "next/image";
import Link from "next/link";
import cardStyles from '@/utils/styles/card.module.scss'

interface CardProps{
    pageRoute: string
    title: string;
    imageUrl: string;
    id: number;
}

export function Card({ pageRoute, title, imageUrl, id }: CardProps){
    return(
        <Link href={`/${pageRoute}/${id}`} className={cardStyles.link}>
            <li className={cardStyles.item}>
                <div className={cardStyles.imageContainer}>
                    <Image
                        src={imageUrl}
                        alt={title}
                        className={cardStyles.srcImage}
                        quality={100}
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <p>{title}</p>
            </li>
        </Link>
    )
}