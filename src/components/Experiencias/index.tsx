import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

interface IExperiencia {
  slug: string;
  description: string;
  year: string;
  company: string;
}
interface ExperienciasProps {
  experiencias: IExperiencia[];
}

function Experiencias({ experiencias }: ExperienciasProps) {
  return (
    <Container>
      <SectionTitle title="Minhas" description="experiências" />

      <section>
        {experiencias.map(experiencia => (
          <ExperienciaItem
            key={experiencia.slug}
            year={experiencia.year}
            title={experiencia.company}
            description={experiencia.description}
          />
        ))}
      </section>
    </Container>
  );
}

export default Experiencias;
