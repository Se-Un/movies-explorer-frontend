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
  const setActive = ({isActive}) => isActive ? 'nav__link nav__link-burger_active' : 'nav__link nav__link-burger';
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
        btnName='nav__btn-burger'
        btnText='Aккаунт'
        loginIn={props.loggedIn} 
        location={props.location}
        nav={handleNavProfile}
        openBurgerMenu=''
        classBurger='nav__btn-burger_display_none' 
        >
          <nav className='nav__links-burger' onClick={handleCloseMenu}>
            {
              links.map((link, index) => 
                <NavLink className={setActive} to={link.href} key={index}>
                  <p className='nav__link-text-burger'>{link.text}</p>
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