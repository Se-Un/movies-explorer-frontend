// импорт зависимостей
import { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// импорт структурных файлов
import './App.css';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { MOVIE_URL, localJwt } from '../../utils/constants';
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
  // константа useNavigate
  const navigate = useNavigate();
  // переменные состояния
  const [ currentUser, setCurrentUser ] = useState({});
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ openBurgerMenu, setOpenBurgerMenu ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ movies, setMovies ] = useState([]);
  const [ saveMovies, setSaveMovies ] = useState([]);
  const [ messageErr, setMessageErr ] = useState({ err: false, message: '', });
  const [ isPage, setIsPage ] = useState('');
  // эффект запроса к апи для получения первоначальных данных
  useEffect(() => {
    const token = localStorage.getItem(localJwt);

    setLoading(true);

    if(token) {

      Promise.all([ mainApi.getUserInfo(), mainApi.getUserMovies()])
        .then(([user, save]) => {

          setCurrentUser(user);

          setSaveMovies(save);

        })
        .catch((error) => {
          
            if(error) {

              setMessageErr({
                err: true,
                message: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
              });

            }
          
        });

      moviesApi.getMovies()
        .then((data) => {
          setMovies(data);
        })
        .catch((error) => {
          if(error) {
            setMessageErr({
              err: true,
              message: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
            });

          }

        });
      
    }
    setTimeout(() => {
      setLoading(false);
    }, 400);

  }, [loggedIn]);
  // эффект перезагрузки страницы
  useEffect(() => {
    if(localStorage.getItem(localJwt)) {
      setLoggedIn(true);
    }
  }, [])
  // функция обработчик авторизации
  function handleLogin(email, password) {

    setLoading(true);

    mainApi.loginUser(email, password)
      .then(() => {
        localStorage.setItem(localJwt, 'true');
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((error) => {console.log(error);
      if(error) {
          setMessageErr({
            err: true,
            message: error,
          });
        }
        });

    setTimeout(() => {
      setLoading(false);
    }, 400);
  }
  // функция обработчик регистрации
  function handleRegistry(name, email, password) {
    setLoading(true);

    mainApi.registerUser(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((error) => {

        console.log(error);
        if(error) {
            setMessageErr({
              err: true,
              message: error,
            });

          }

      });

      setTimeout(() => {
        setLoading(false);
      }, 400);
  }
  // функция обработчик выхода из аккаунта
  function handleLogout() {
    setLoading(true);

    mainApi.logoutUser()
      .then(() => {
        
        setLoggedIn(false);
        localStorage.clear();
        navigate('/signin', { replace: true })
      })
      .catch((error) => {

        if(error) {
            setMessageErr({
              err: true,
              message: error.message,
            });

          }

      });

      setTimeout(() => {
        setLoading(false);
      }, 400);
  }
   // функция обработчик редактирования профиля
   function handleChangeProfile(data) {
    setLoading(true);

    mainApi.patchUserInfo(data)
      .then((data) => {
        setCurrentUser({
          ...currentUser,
          name: data.name,
          email: data.email,
        })
      })
      .catch((error) => {

        if(error) {

          setMessageErr({

            err: true,
            message: error.message,

          });

        }
      });

      setTimeout(() => {
        setLoading(false);
      }, 400);
  }
  // функция обработчик сохранения фильмов
  function handleSaveMovies(dataMovie) {

    const dataSaved = {
      country: dataMovie.country,
      director: dataMovie.director,
      duration: dataMovie.duration,
      year: dataMovie.year,
      description: dataMovie.description,
      image: MOVIE_URL + dataMovie.image.url,
      trailerLink: dataMovie.trailerLink,
      thumbnail: MOVIE_URL + dataMovie.image.formats.thumbnail.url,
      movieId: dataMovie.id,
      nameRU: dataMovie.nameRU,
      nameEN: dataMovie.nameEN,
    }

    mainApi.postUserMovies(dataSaved)
      .then((items) => {
        setSaveMovies((item) => [
          ...item,
          items,
        ]);
      })
      .catch((error) => {

        if(error) {

          setMessageErr({
            err: true,
            message: error.message,
          });

        }
      });

  }
  // функция обработчик удаления фильмов
  function handleRemoveMovies(card) {

    mainApi.removeUserMovies(card._id)
      .then(() => {
        setSaveMovies((items) => items.filter((movie) => movie._id !== card._id));
      })
      .catch((error) => {

        if(error) {

          setMessageErr({
            err: true,
            message: error.message,
          });

        }

      })
  }
  // функция обработчик на соответствие фильма
  function getSavedMovieCard(movies, card) {
    return movies.find((movie) => movie.movieId === card.id);
  }
  // отрисовка компонентов страницы
  return (
    <CurrentUserContext.Provider value={currentUser}>

    <div className="page">

      <Suspense fallback={<Preloader />}>
        
        <Routes>
          
          <Route path='/' 
            element={<AppLayout 
              loggedIn={loggedIn} 
              location={location} 
              setOpenBurgerMenu={setOpenBurgerMenu}
              openBurgerMenu={openBurgerMenu} 
              />}
          >
            
            <Route index element={<Main />} />

            <Route element={<ProtectedRoute auth={loggedIn} />}>

              <Route path='/movies' 
                element={<Movies 
                  preload={loading}
                  setLoad={setLoading}
                  array={movies}
                  message={messageErr}
                  setMessage={setMessageErr}
                  page={isPage}
                  setPage={setIsPage}
                  save={handleSaveMovies}
                  delete={handleRemoveMovies}
                  saved={saveMovies}
                  changeBtn={getSavedMovieCard}
                />} 
              />

              <Route path="/saved-movies" element={<SavedMovies 
                saved={saveMovies}
                preload={loading}
                setLoad={setLoading}
                message={messageErr}
                setMessage={setMessageErr}
                page={isPage}
                setPage={setIsPage}
                delete={handleRemoveMovies}
                changeBtn={getSavedMovieCard} 
                />}
              />

              <Route path="/profile" element={<Profile 
                locate={location} 
                onSignout={handleLogout}
                handleProfile={handleChangeProfile}
                load={loading}
                message={messageErr} 
                />} 
              />

            </Route>
            
            <Route path="/signup" element={<Registry 
              locate={location} 
              onRegistry={handleRegistry}
              load={loading}
              message={messageErr} 
              />} 
            />
            
            <Route path="/signin" element={<Login 
              locate={location} 
              onLogin={handleLogin}
              load={loading}
              message={messageErr} 
              />} 
            />

          </Route>
          
          <Route path="*" element={<NotFoundErr setLogged={setLoggedIn} />} />

        </Routes>

      </Suspense>
      
    </div>

    </CurrentUserContext.Provider>
  );
}

export default App;


