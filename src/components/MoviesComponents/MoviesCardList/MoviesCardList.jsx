// импорт структурных файлов
import './MoviesCardList.css';
// компонент MoviesCardList
function MoviesCardList(props) {

  return (

    <section className='card-list'>
      
      <p className='card-list__message'>{props.text}</p>

      <ul className='card-list__container'>

        {
          props.children
        }

      </ul>

    </section>

  )

 }

 export default MoviesCardList;