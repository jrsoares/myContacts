import { Overlay, Container, Footer } from './styles';
import { Button } from '../Button';

export default function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Titulo do Modal</h1>
        <p>Corpo do Modal</p>
        <Footer>
          <button className="cancel-button" type="button">Cancelar</button>
          <Button type="button">Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}
