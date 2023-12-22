//импорт зависимостей
import { NavLink, useNavigate } from 'react-router-dom';
// импорт структурных файлов
import './MenuBurger.css';
import Navigation from '../Navigation/Navigation';
import { links } from '../../../utils/config';
// компонент меню бургер
function MenuBurger(props) {
  // использовать useNavigate
  const navigate = useNavigate();
  // константа активной ссылки
  const setActive = ({isActive}) => isActive ? 'nav__link nav-burger__link_active' : 'nav__link nav-burger__link';
  // функция закртыия меню
  const handleCloseMenu = () => {
    props.setOpen(false);
  };
  // функция обработчик кнопки аккаунт
  const handleNavProfile = () => {
    navigate('/profile', {replace: true});
    props.setOpen(false);
  }
  // отрисовка компонента меню бургер
  return (
    <div className={`menu-burger ${props.open ? 'menu-burger_visibility_visible' : ''}`}>

      <div className={`menu-burger__container ${props.open ? 'menu-burger__container_position_left' : ''}`}>
        
        <button className='menu-burger__btn-close' onClick={handleCloseMenu}></button>

        <Navigation
        name='burger'
        btnName='nav-burger__btn'
        btnText='Aккаунт'
        loginIn={props.loggedIn} 
        location={props.location}
        nav={handleNavProfile}
        openBurgerMenu=''
        classBurger='nav-burger__btn_display_none' 
        >
          <nav className='nav-burger__links' onClick={handleCloseMenu}>
            {
              links.map((link, index) => 
                <NavLink className={setActive} to={link.href} key={index}>
                  <p className='nav-burger__link-text'>{link.text}</p>
                </NavLink>
              )
            }
          </nav>

        </Navigation>

      </div>
      
    </div>
  )
}

export default MenuBurger;