// импорт структурных файлов
import './NavTab.css';
// компонент NavTab
function NavTab() {
  
  return (
    
    <nav className='nav-tab'>

      <a className='nav-tab__link' href="#about-project">О проекте</a>

      <a className='nav-tab__link' href="#techs">Технологии</a>

      <a className='nav-tab__link' href="#student">Студент</a>
      
    </nav>

  )

}

export default NavTab;