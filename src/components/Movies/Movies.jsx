// импорт зависимостей
import { useState, useEffect } from 'react';
// импорт структурных файлов
import './Movies.css';
import SearchForm from '../MoviesComponents/SearchForm/SearchForm';
import MoviesCardList from '../MoviesComponents/MoviesCardList/MoviesCardList';
import MoviesCard from  '../MoviesComponents/MoviesCard/MoviesCard';
import Button from '../Button/Button';
import moviesApi from '../../utils/MoviesApi';
import { useSearch } from '../../hooks/Search/useSearch';
import Preloader from '../Preloader/Preloader';
import useScreenSize  from '../../hooks/ScreenSize/useScreenSize';
import { dataSreenSize, localMovies, MOVIE_URL } from "../../utils/constants";
// компонент Movies
function Movies(props) {
  // переменные состояния
  const [ movies, setMovies ] = useState([]);
  const [ renderCount, setRenderCount ] = useState(0);
  const [ moreRenderCount, setMoreRenderCount ] = useState(0);
  const [ searchQuery, setSearchQuery ] = useState({
    string: '',
    duration: false,
  });
  // переменная деструктуризации данных хука useSearch
  const {filtered, submitFilterMovies, text } = useSearch(
    movies,
    props.message,
    props.page,
    );
  // переменная хранилище текущей ширины экрана
  const screenWidth = useScreenSize();
  // эффект отображения карточек фильмов на странице
  useEffect(() => {

    props.setPage('movies');

    function handleCountCardsScreen() {

      if(screenWidth >= dataSreenSize.hd.width) {
  
        setMoreRenderCount(dataSreenSize.hd.more);

        setRenderCount(dataSreenSize.hd.render);
        
      }

      if(screenWidth >= dataSreenSize.desktop.width && screenWidth < dataSreenSize.hd.width) {

        setRenderCount(dataSreenSize.desktop.render);

        setMoreRenderCount(dataSreenSize.desktop.more);

      }

      if(screenWidth >= dataSreenSize.tablet.width && screenWidth < dataSreenSize.desktop.width) {

        setRenderCount(dataSreenSize.tablet.render);

        setMoreRenderCount(dataSreenSize.tablet.more);

      }

      if(screenWidth >= dataSreenSize.mobile.width && screenWidth < dataSreenSize.tablet.width) {

        setRenderCount(dataSreenSize.mobile.render);

        setMoreRenderCount(dataSreenSize.mobile.more);

      }
      
    }

    return handleCountCardsScreen();

  }, [screenWidth, props,])
  // эффект отображения карточек из локалсторэдж
  useEffect(() => {

    if(localMovies in localStorage) {
      const { string, duration } = JSON.parse(localStorage.getItem(localMovies));

      setSearchQuery({
        string,
        duration,
      })
    }

  },[]);
  // функция обработчик кнопки ещё
  function handleClickMore() {
    setRenderCount((prev) => prev + moreRenderCount)
  }
  // функция обработчик сабмита на странице фильмов
  function handleSubmitMovies(query) {
    if(movies.length === 0) {
      props.setLoad(true);

      moviesApi.getMovies()
        .then((data) => {
          setMovies(data);
          submitFilterMovies(data, query);
        })
        .catch((error) => {
          if(error) {
            props.setMessage({
              err: true,
              message: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
            });
          }
        })
        .finally(() => {
          props.setLoad(false);
        });
    } else {
      submitFilterMovies(movies, query);
    }
  }
  // отрисовка компонентов страницы
  return (

    <main className='movies'>

      <SearchForm
        onSubmit={handleSubmitMovies}
        query={searchQuery}
        setQuery={setSearchQuery}
        duration={submitFilterMovies}
        filter={filtered}
      />

      {
        props.preload ? <Preloader name='preloader__main' /> : 
        
        <MoviesCardList text={text} >

          {
            filtered.slice(0, renderCount).map((card) => {
              return <MoviesCard
                key={card.id}
                movie={card}
                image={`${MOVIE_URL}${card.image.url}`}
                name='movies'
                del={props.delete}
                add={props.save}
                saved={props.saved}
                click={props.changeBtn(props.saved, card)}
              />
            })
          }

        </MoviesCardList>

      }   
      
      { filtered.length > renderCount ? 
        <Button name='button__movies' text='Ещё' click={handleClickMore} changeDisabled={true} /> : '' }

    </main>

  )

}

export default Movies;