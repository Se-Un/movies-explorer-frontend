import { useState } from 'react';
// импорт структурных файлов
import './MoviesCard.css';
// компонент MoviesCard
function MoviesCard(props) {
  
  const [ click, setClick ] = useState(false);

  const activeBtn = () => {
    setClick(!click);
  }

  function changeBtn() {
    if(props.name === 'movies') {
      return ( 
      <button className='card__btn' onClick={activeBtn}>
        <span className={click ? ' card__rondure card__rondure_active' : 'card__rondure'}></span>
      </button>
      )
    }
    return <button className='card__btn-delete'></button>
  }

  return (
    <div className='card'>

      <img className='card__img' src={props.image} alt="" />

      <div className='card__container'>

        <h4 className='card__title'>{props.title}</h4>

        {
          changeBtn()
        }

      </div>

      <p className='card__time'>{props.time}</p>
      
    </div>
  )

 }

 export default MoviesCard;