// импорт зависимостей
import { Outlet } from "react-router-dom";
// импорт структурных файлов
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MenuBurger from "../Header/MenuBurger/MenuBurger";

// компонент отрисовки страниц
function AppLayout({loggedIn, location, setOpenBurgerMenu, openBurgerMenu}) {

  return (
    <>
      <Header loggedIn={loggedIn} location={location} setOpenMenuBurger={setOpenBurgerMenu} />

      <Outlet />

      {
        location.pathname !== '/profile' && location.pathname !== '/signup' && location.pathname !== '/signin' ? <Footer /> : ''
      }
      
      <MenuBurger 
        open={openBurgerMenu} 
        setOpen={setOpenBurgerMenu}
        loggedIn={loggedIn}
        location={location} 
      />

    </>
  )

}

export default AppLayout;