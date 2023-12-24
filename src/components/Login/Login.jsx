// импорт структурных файлов
import './Login.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
// компонент Login
function Login (props) {

  return (
    <main className='login'>

      <section className='login__section'>

        <PopupWithForm form='auth' page='login' path={props.locate}>
        
          <div className='popup__labels-auth'>

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

              <input className='popup__input-auth' type="password" required />

            </label>
          
            <p className='popup__error-auth'></p>

          </div>

        </PopupWithForm>

      </section>

    </main>
  )
  
}

export default Login;