// импорт зависимостей
import { useState } from 'react';
// импорт структурных файлов
import './SearchForm.css';
// компонент SearchForm
function SearchForm() {
  // переменные состояния
  const [ check, setCheck ] = useState(true)

  return (

    <section className='search'>

      <form className='search__form' action="">

        <div className='search__container-search'>

          <label className='search__icon' htmlFor='input'></label>

          <input className='search__input' id='input' type="text" placeholder='Фильм' />

          <button className='search__btn'></button>

        </div>

        <div className='search__container-checkbox'>

          <div className='search__line'></div>

          <label className='search__checkbox'>
            
            <input 
              className='search__toggle' 
              type="checkbox" 
              defaultChecked={check} 
              onChange={() => setCheck(!check)} 
            />

            <span className='search__switch'></span>

          </label>

          <p className='search__checkbox-text'>Короткометражки</p>

        </div>

      </form>

      <div className='search__rectangle'></div>
    </section>
  )

}

export default SearchForm;