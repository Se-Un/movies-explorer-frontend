// импорт структурных файлов
import './Registry.css';
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Registry (props) {
  return (
    <main className="registry">

      <section className='registry__section'>

        <PopupWithForm form='auth' path={props.locate}>
        
          <div className='popup__labels-auth'>

            <label className='popup__label-auth'>
            
              <span className='popup__span-auth'>Имя</span>
            
              <input 
                className='popup__input-auth' 
                type="text"
                placeholder='Виталий'
                minLength="2"
                maxLength="30"
                required 
              />
            
            </label>

            <label className='popup__label-auth'>
            
              <span className='popup__span-auth'>E-mail</span>

              <input 
                className='popup__input-auth popup__input-auth_letter_spacing' type="email"
                placeholder="pochta@yandex.ru"
                required 
              />

            </label>

            <label className='popup__label-auth'>

              <span className='popup__span-auth'>Пароль</span>

              <input className='popup__input-auth' required type="password" />

            </label>
          
            <p className='popup__error-auth'>Что-то пошло не так...</p>

          </div>

        </PopupWithForm>

      </section>

    </main>
  )
  
}

export default Registry;