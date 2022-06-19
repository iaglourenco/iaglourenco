import Prismic from '@prismicio/client';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import Conhecimentos from '../components/Conhecimentos';
import Experiencias from '../components/Experiencias';
import Footer from '../components/Footer';
import FormContato from '../components/FormContato';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Projetos from '../components/Projetos';
import { getPrismicClient } from '../services/prismic';
import { HomeContainer } from '../styles/HomeStyles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface IExperiencia {
  slug: string;
  description: string;
  year: string;
  company: string;
}

interface HomeProps {
  projetos: IProjeto[];
  experiencias: IExperiencia[];
}

export default function Home({ projetos, experiencias }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | Meu portfólio</title>
        <meta
          name="description"
          content="Graduando em Engenharia de Computação pela Pontifícia Universidade Católica de Campinas, desenvolvo projetos e soluções para a área de TI."
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Graduando em Engenharia de Computação pela Pontifícia Universidade Católica de Campinas, desenvolvo projetos e soluções para a área de TI."
        />
      </Head>

      <Header />

      <main className="container">
        <HomeHero />
        <Experiencias experiencias={experiencias} />
        <Projetos projetos={projetos} />
        <Conhecimentos />
        <FormContato />
      </main>

      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projetos')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const expResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'experiencia')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const experiencias = expResponse.results.map(exp => ({
    slug: exp.uid,
    company: exp.data.title,
    description: exp.data.description,
    year: exp.data.year
  }));

  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail: projeto.data.thumbnail.url
  }));

  return {
    props: {
      projetos,
      experiencias
    },
    revalidate: 86400
  };
};
