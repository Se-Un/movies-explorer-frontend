// импорт структурных файлов
import './MoviesCardList.css';
// компонент MoviesCardList
function MoviesCardList(props) {

  return (

    <section className={`card-list ${props.name === 'saved' ? 'card__list_size_height' : ''}`}>

      {
        props.children
      }

    </section>

  )

 }

 export default MoviesCardList;