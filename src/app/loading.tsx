import loadStyles from '@/utils/styles/loading.module.scss'
import { TbLoaderQuarter } from "react-icons/tb";

export default function Loading(){
    return(
        <main className={loadStyles.wrapper}>
            <p>Carregando <TbLoaderQuarter color='#16b0b0'/></p>
        </main>
    )
}