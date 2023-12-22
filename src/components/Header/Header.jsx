// импорт зависимостей
import { Link, NavLink, useNavigate} from 'react-router-dom';
// импорт структурных файлов
import './Header.css';
import logotype from '../../images/logo/header-logo.svg';
import Navigation from './Navigation/Navigation';
import { links } from '../../utils/config';
// компонент шапки приложения
function Header({loggedIn, setOpenMenuBurger, location}) {
    // использовать useNavigate
    const navigate = useNavigate();
  // константы панели навигации шапки
  const classButton = loggedIn ? `nav-header__btn_display_none ${location.pathname === '/' ? '' : 'nav-header__btn_bg_color'}` : 'nav-header__btn-auth';
  const classBtnBurger = `nav-header__btn-burger 
  ${loggedIn ? location.pathname === '/' ? '' : 'nav-header__btn_bg_color' : 'nav-header__btn_display_none'}`;
  // функция обработчик клика кнопки для перехода на страницы
  function handleNavigation() {
    loggedIn ? navigate('/profile', { replace: true }) : navigate('/signin', { replace: true }) 
  };
  // функция обработчик отрисовки навигации на разных страницах
  function handlePathNameComponent() {

    if(location.pathname === '/signup') {
      return <h1 className='header__title'>Добро пожаловать!</h1>;
    }

    if(location.pathname === '/signin') {
      return <h1 className='header__title'>Рады видеть!</h1>;
    }
    
    return <Navigation

    name='header'
    btnName={classButton}
    btnText={loggedIn ? 'Aккаунт' : 'Войти'}
    loginIn={loggedIn} 
    location={location} 
    openBurger={setOpenMenuBurger}
    nav={handleNavigation}
    classBurger={classBtnBurger}
    >
      <nav className={loggedIn ? 'nav-header__links' : 'nav-header__links_visibility_hidden'}>
        {
          links.map((link, index) => 
            <NavLink 
            className='nav-header__link' to={link.href} key={index}>
              {link.text}
            </NavLink>
          )
        }
      </nav>

    </Navigation>;
  };
  // отрисовка компонентов шапки приложения
  return (
    <header className={`header ${location.pathname === '/signup' || location.pathname === '/signin' ? 'header-auth' : 
    location.pathname === '/' ? 'header_bg_color' : '' }`}>

      <div 
      className={location.pathname === '/signup' || location.pathname === '/signin' ? 
      'header__container-auth' : 'header__container'}>

        <Link className='header__link' to="/">

          <img className='header__logo' src={logotype} alt='тут должен быть логотип приложения' />

        </Link>

        {
          handlePathNameComponent()
        }

      </div>
      
    </header>
  )
}

export default Header;