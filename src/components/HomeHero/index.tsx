/* eslint-disable react/jsx-no-comment-textnodes */
import picture from '../../assets/pessoa.jpg';
import { CodeItem, Container, InfosContainer, TextContainer } from './styles';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Iago</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Quem sou eu?</span>
            <span className="purple">infoUsuario</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Iago,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Lourenço</span>
            </div>
            <div>
              Formação: <span className="blue">Engenheiro da Computação</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">cargoAtual</span> {'\u007B'}
            <div>
              Função: <span className="blue">Analista de <br>Engenharia de Software,</span>
            </div>
            <div>
              Empresa: <span className="blue">SiDi</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
