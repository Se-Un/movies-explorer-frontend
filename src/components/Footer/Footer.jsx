
// импорт структурных файлов
import './Footer.css';
import { footerLinks } from '../../utils/config';
// компонент footer
function Footer() {

  return (

    <footer className='footer'>

      <p className='footer__text footer__font_style'>Учебный проект Яндекс.Практикум х BeatFilm.</p>

      <div className='footer__container'>

        <p className='footer__author footer__font_style'>&#169; 2020</p>

        <div className='footer__links'>

          <a className='footer__link footer__font_style' href={footerLinks.yandex} target='blank'>Яндекс.Практикум</a>

          <a className='footer__link footer__font_style' href={footerLinks.github} target='blank'>Github</a>

        </div>

      </div>

    </footer>

  )

};

export default Footer;