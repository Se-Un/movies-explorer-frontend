// импорт структурных файлов
import './Movies.css';
import SearchForm from '../MoviesComponents/SearchForm/SearchForm';
import MoviesCardList from '../MoviesComponents/MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesComponents/MoviesCard/MoviesCard';
import Button from '../Button/Button';
import { images } from '../../utils/config';
// компонент Movies
function Movies() {

  return (
    <main className='movies'>

      <SearchForm />

      <MoviesCardList 
      duration='1ч42м'
      >
        {
          images.map((img, index) => 
            <MoviesCard
            key={index}
            image={img}
            name='movies'
            title='33 слова о дизайне'
            time='1ч42м' 
            />
            )   
        }

      </MoviesCardList>

      <Button name='button__movies' text='Ещё' />

    </main>
  )

}

export default Movies;