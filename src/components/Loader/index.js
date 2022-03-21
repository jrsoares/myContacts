import ReactDOM from 'react-dom';
import { Overlay } from './styles';

export default function Modal() {
  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    document.getElementById('modal-root'),
  );
}
