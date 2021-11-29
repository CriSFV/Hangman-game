import '../styles/Footer.scss';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className='footer'>
      <nav>
        <ul>
          <li className='footer__menu-item'>
            <Link className='footer__menu-link active' to='/'>
              A jugar
            </Link>
          </li>

          <li className='footer__menu-item'>
            <Link className='footer__menu-link active' to='/instructions'>
              ¿Cómo se juega?
            </Link>
          </li>
          <li className='footer__menu-item'>
            <Link className='footer__menu-link active' to='/options'>
              Más opciones
            </Link>
          </li>
        </ul>
      </nav>

      <small className='footer__copy'>© Adalab</small>
    </footer>
  );
};
export default Footer;
