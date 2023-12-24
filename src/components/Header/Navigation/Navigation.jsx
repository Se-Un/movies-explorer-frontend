// импорт зависимостей
import { Link } from 'react-router-dom';
// импорт структурных файлов
import './Navigation.css';
import navLogo from '../../../images/logo/nav-button-icon.svg';
// компонент навигации
function Navigation(props) {
 // отрисовка компонентов навигации
  return (

    <div className={`nav-${props.name}`}>

      {props.children}

      <div className={`nav__container nav-${props.name}__container`}>
        
        <Link className={`nav-${props.name}__link_display_none ${props.loginIn ? 'nav__link_visibility_hidden' : 'nav__link'}`} to='/signup'>Регистрация</Link>
        
        <button className={`nav__btn ${props.btnName}`} 
        onClick={props.nav}>
          
          <img className={props.loginIn ? 'nav__btn-img' : 'nav__btn-img_display_none'} src={navLogo} alt="иконка кнопки" />
          
          <span className={`nav__btn-text nav-${props.name}__btn-text`}>
            {props.btnText}
          </span>
          
        </button>
        
        <button className={`nav__btn ${props.classBurger}`} 
        onClick={() => props.openBurger(true)}>
          <div className='nav__btn-burger-line'></div>
          <div className='nav__btn-burger-line'></div>
          <div className='nav__btn-burger-line'></div>
        
        </button>

      </div>

    </div>
  )
}

export default Navigation;

