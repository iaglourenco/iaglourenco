import {
  AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram
} from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineInstagram
            onClick={() => handleRedirect('https://instagram.com/iaglourenco')}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/iaglourenco')}
          />
          <AiFillLinkedin
            onClick={() => handleRedirect('https://linkedin.com/in/iagolourenco')}
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
