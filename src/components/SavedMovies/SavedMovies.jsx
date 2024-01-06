// импорт зависимостей
import { useEffect, useState } from 'react';
// импорт структурных файлов
import './SavedMovies.css';
import SearchForm from '../MoviesComponents/SearchForm/SearchForm';
import MoviesCardList from '../MoviesComponents/MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesComponents/MoviesCard/MoviesCard';
import { useSearch } from '../../hooks/Search/useSearch';
import Preloader from '../Preloader/Preloader';
// компонент Movies
function SavedMovies(props) {
  // переменные состояния
  const [ savedQuery, setSavedQuery ] = useState({ string: '', duration: false, });
  // эффект для определения страницы
  useEffect(() => {
    props.setPage('saved');
  }, [props])
  // переменная деструктуризации данных хука useSearch
  const {filtered, submitFilterMovies, text } = useSearch(
    props.saved,
    props.message,
    props.page
  );
  //
  function handleSubmitSaved(query) {
    submitFilterMovies(props.saved, query);
  } 
  // отрисовка компонентов страницы SavedMovies
  return (
    <main className='saved-movies'>

      <SearchForm
        onSubmit={handleSubmitSaved}
        query={savedQuery}
        setQuery={setSavedQuery}
      />

      {

        props.preload ? <Preloader name='preloader__main' /> :

          <MoviesCardList text={text} >
          
            {
            
              filtered.map((card) => {
                return <MoviesCard
                  key={card._id}
                  movie={card}
                  image={card.image}
                  name='saved'
                  del={props.delete}
                  currentMovie={props.changeBtn(props.saved, card)}
                />

              })

            }

          </MoviesCardList>

      }  
      
    </main>
  )

}

export default SavedMovies;