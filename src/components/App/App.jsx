// импорт зависимостей
import { useState, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// импорт структурных файлов
import './App.css';
import Preloader from '../Preloader/Preloader';
const AppLayout = lazy(() => import('../AppLayout/AppLayout'));
const Main = lazy(() => import('../Main/Main'));
const Movies = lazy(() => import('../Movies/Movies'));
const SavedMovies = lazy(() => import('../SavedMovies/SavedMovies'));
const Profile = lazy(() => import('../Profile/Profile'));
const Registry = lazy(() => import('../Registry/Registry'));
const Login = lazy(() => import('../Login/Login'));
const NotFoundErr = lazy(() => import('../NotFoundErr/NotFoundErr'));


// блок отрисовки страниц
function App() {
  // константа useLocation
  const location = useLocation();
  // переменные состояния
  const [ loggedIn, setLoggedIn ] = useState(true);
  const [ openBurgerMenu, setOpenBurgerMenu ] = useState(false);
  
  // отрисовка компонентов страницы
  return (
    <div className="page">

        <Suspense fallback={<Preloader />}>

          <Routes>

            <Route path='/' 
              element={<AppLayout 
              loggedIn={loggedIn} 
              location={location} 
              setOpenBurgerMenu={setOpenBurgerMenu}
              openBurgerMenu={openBurgerMenu} 
            />}>

              <Route index element={<Main />} />

              <Route path='/movies' element={<Movies />} />

              <Route path="/saved-movies" element={<SavedMovies />} />

              <Route path="/profile" element={<Profile name='Виталий' locate={location} />} />

              <Route path="/signup" element={<Registry locate={location} />} />

              <Route path="/signin" element={<Login locate={location} />} />

            </Route>

            <Route path="*" element={<NotFoundErr setLogged={setLoggedIn} />} />

          </Routes>

        </Suspense>
      
    </div>
  );
}

export default App;


