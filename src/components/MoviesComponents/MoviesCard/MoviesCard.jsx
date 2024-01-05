// импорт структурных файлов
import './MoviesCard.css';
import { handleDurationMovies } from '../../../utils/utils';
// компонент MoviesCard
function MoviesCard(props) {
  // функция обработчик клика по кнопке для добавления и удаления фильмов на странице фильмы
  function handleClickBtn() {
    if(props.click) {
      props.del(props.saved.filter((item) => item.movieId === props.movie.id)[0]);
    } else {
      props.add(props.movie);
    }
  }
  // функция обработчик клика по кнопке удаления фильмов на странице сохр. фильмы
  function handleDeleteSavedMovie() {
    props.del(props.movie);
  }
  // функция обработчик видимости кнопки
  function changeBtn() {
    if(props.name === 'movies') {
      return (
        <div className='card__btn'>
            
            <button 
              className={props.click ? 'card__rondure card__rondure_active' : 'card__rondure'} 
              onClick={handleClickBtn}
            ></button>

        </div> 
      
      )
    }
    return <button className='card__btn-delete' onClick={handleDeleteSavedMovie}></button>
  }
  // отрисовка компонента карточки
  return (
    <div className='card'>

      <a className='card__link' href={props.movie.trailerLink} target='blanck'>

        <img className='card__img' src={props.image} alt='тут было фото' />

      </a>

      <div className='card__container'>

        <h4 className='card__title'>{props.movie.nameRU}</h4>

        {
          changeBtn()
        }

      </div>

      <p className='card__time'>{handleDurationMovies(props.movie.duration)}</p>
      
    </div>
  )

 }

 export default MoviesCard;