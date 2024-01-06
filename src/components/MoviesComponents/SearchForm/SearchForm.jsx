// импорт структурных файлов
import './SearchForm.css';
// компонент SearchForm
function SearchForm(props) {
  // функция обработчик изменения содержимого инпута
  const handleChange = (e) => {
    props.setQuery({ ...props.query, string: e.target.value })
  };
  // функция обработчик формы поиска
  function handleSubmit(e) {

    e.preventDefault();

    props.onSubmit(props.query);
      
  }
  // отрисовка компонента страницы
  return (

    <section className='search'>

      <form className='search__form' action="" onSubmit={handleSubmit}>

        <div className='search__container-search'>

          <label className='search__icon' htmlFor='input'></label>

          <input 
            className='search__input' 
            id='input' 
            type="text" 
            placeholder='Фильм'
            value={props.query.string}
            onChange={handleChange}
          />

          <button className='search__btn' name='submit' type='submit'></button>

        </div>

        <div className='search__container-checkbox'>

          <div className='search__line'></div>

          <label className='search__checkbox'>
            
            <input 
              className='search__toggle' 
              type="checkbox"
              checked={props.query.duration}
              onChange={(e) => props.setQuery({ ...props.query, duration: e.target.checked})} 
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