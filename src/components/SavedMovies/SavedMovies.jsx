// импорт структурных файлов
import './SavedMovies.css';
import SearchForm from '../MoviesComponents/SearchForm/SearchForm';
import MoviesCardList from '../MoviesComponents/MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesComponents/MoviesCard/MoviesCard';
import { images } from '../../utils/config';
// компонент Movies
function Movies() {

  return (
    <main className='saved-movies'>

      <SearchForm />

      <MoviesCardList name="saved">

        {
          images.slice(0, 3).map((item, index) => 
          <MoviesCard
          key={index}
          image={item}
          name='saved'
          title='33 слова о дизайне'
          time='1ч42м'
          />)
        }
      
      </MoviesCardList>

    </main>
  )

}

export default Movies;