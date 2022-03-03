import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import arrow from '../../assets/icons/arrow.svg';
import { Container } from './styles';

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Back" />
        <small>Voltar</small>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};