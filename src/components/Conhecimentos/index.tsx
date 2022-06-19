import { AiFillHtml5 } from 'react-icons/ai';
import { FaAndroid, FaConfluence, FaCss3Alt, FaGit, FaJenkins, FaJira, FaLinux, FaReact } from 'react-icons/fa';
import { IoLogoBitbucket, IoLogoFirebase, IoLogoJavascript, IoLogoPython } from 'react-icons/io5';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="JIRA" icon={<FaJira />} />
        <ConhecimentoItem title="Confluence" icon={<FaConfluence />} />
        <ConhecimentoItem title="Jenkins" icon={<FaJenkins />} />
        <ConhecimentoItem title="Android" icon={<FaAndroid />} />
        <ConhecimentoItem title="Python" icon={<IoLogoPython />} />
        <ConhecimentoItem title="Firebase" icon={<IoLogoFirebase />} />
      </section>
      <section>
        <ConhecimentoItem title="Linux" icon={<FaLinux />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Git" icon={<FaGit />} />
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="Bitbucket" icon={<IoLogoBitbucket />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
