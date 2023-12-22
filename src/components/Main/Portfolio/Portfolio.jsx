// импорт структурных файлов
import './Portfolio.css';
// компонент Portfolio
function Portfolio() {

  return (

    <div className='portfolio'>

      <h4 className='portfolio__title'>Портфолио</h4>

      <ul className='portfolio__items'>

        <li className='portfolio__item'>
          
          <a className='portfolio__link' href="https://github.com/Se-Un/how-to-learn" target='blank'>

            <p className='portfolio__text'>Статичный сайт</p>

            <p className='portfolio__img'></p>

          </a>

        </li>

        <li className='portfolio__item'>
          
          <a className='portfolio__link' href="https://github.com/Se-Un/russian-travel" target='blank'>

            <p className='portfolio__text'>Адаптивный сайт</p>

            <p className='portfolio__img'></p>

          </a>

        </li>

        <li className='portfolio__item'>
          
          <a className='portfolio__link' href="https://github.com/Se-Un/react-mesto-auth" target='blank'>

            <p className='portfolio__text'>Одностраничное приложение</p>

            <p className='portfolio__img'></p>

          </a>

        </li>
        
      </ul>

    </div>
  )

}

export default Portfolio;