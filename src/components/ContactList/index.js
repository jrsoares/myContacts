import {
  Container, Header, ListContainer, Card,
} from './styles';
import arrow from '../../assets/icons/arrow.svg';
import edit from '../../assets/icons/edit.svg';
import trash from '../../assets/icons/trash.svg';

export default function ContactList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Junior Soares</strong>
              <small>instagram</small>
            </div>
            <span>juniorsoaresti@gmail.com</span>
            <span>(69)99999-9999</span>
          </div>

          <div className="actions">
            <a href="/"><img src={edit} alt="Edit" /></a>
            <button type="button"><img src={trash} alt="Trash" /></button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  );
}
