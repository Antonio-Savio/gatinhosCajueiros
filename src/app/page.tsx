import { Hero } from "@/components/Home/hero";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/types/home";
import { Container } from "@/components/container";
import { Adoption } from "@/components/Home/adoption";
import { Store } from "@/components/Home/store";
import { HowToHelp } from "@/components/Home/help";
import { About } from "@/components/Home/about";
import { Footer } from "@/components/footer";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();
  const content = object.metadata;

  return (
    <main>
      <Hero 
        titulo={content.texto_do_topo.titulo} 
        subtitulo={content.texto_do_topo.subtitulo}
        bannerUrl={content.texto_do_topo.banner_img.url}
      />

      <Container>
        <Adoption object={object} />
        
        <Store object={object} />
        
        <HowToHelp object={object} />
        
        <About data={object.metadata.quem_somos} />
      </Container>

      <Footer/>
    </main>
  );
}
