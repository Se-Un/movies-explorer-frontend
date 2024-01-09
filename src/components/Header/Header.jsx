// импорт зависимостей
import { Link, NavLink, useNavigate} from 'react-router-dom';
// импорт структурных файлов
import './Header.css';
import logotype from '../../images/logo/header-logo.svg';
import Navigation from './Navigation/Navigation';
import { links } from '../../utils/constants';
// компонент шапки приложения
function Header({loggedIn, setOpenMenuBurger, location}) {
    // использовать useNavigate
    const navigate = useNavigate();
  // константы панели навигации шапки
  const classButton = loggedIn ? `nav__btn-header_display_none ${location.pathname === '/' ? '' : 'nav__btn-header_bg_color'}` : 'nav__btn-auth-header';
  const classBtnBurger = `nav__btn-burger-header 
  ${loggedIn ? location.pathname === '/' ? '' : 'nav__btn-header_bg_color' : 'nav__btn-header_display_none'}`;
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
      <nav className={loggedIn ? 'nav__links-header' : 'nav__links-header_display_none'}>
        {
          links.map((link, index) => 
            <NavLink 
              className='nav__link nav__link-header' 
              to={link.href} 
              key={index}
              >
              {link.text}
            </NavLink>
          )
        }
      </nav>

    </Navigation>;
  };
  // отрисовка компонентов шапки приложения
  return (
    <header className={`header ${location.pathname === '/signup' || location.pathname === '/signin' ? 'header__auth' : 
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