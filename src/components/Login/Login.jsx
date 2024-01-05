// импорт структурных файлов
import './Login.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useValidation } from '../../hooks/Validation/useValidation';
import Preloader from '../Preloader/Preloader';
// компонент Login
function Login (props) {
  const { values, handleChange, errors, resetForm, isValid } = useValidation();
  // функция обработчик сабмита
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onLogin(values.logEmail, values.logPass);
    resetForm();
  }
  // отрисовка компонента Login
  return (
    <main className='login'>

      {
        
        props.load ? <Preloader /> :

        <section className='login__section'>

          <PopupWithForm 
            form='auth' 
            page='login' 
            path={props.locate} 
            onSubmit={handleSubmit} 
            valid={isValid} 
            message={props.message}>
        
            <div className='popup__labels-auth'>

              <label className='popup__label-auth'>
            
                <span className='popup__span-auth'>E-mail</span>

                <input 
                  className='popup__input-auth popup__input-auth_letter_spacing' 
                  type="email"
                  name="logEmail" 
                  placeholder="pochta@yandex.ru"
                  required
                  value={values.logEmail || ''}
                  onChange={handleChange}
                />

                <p className='popup__error-auth'>{errors.logEmail}</p>

              </label>

              <label className='popup__label-auth'>

                <span className='popup__span-auth'>Пароль</span>

                <input 
                  className='popup__input-auth'
                  name="logPass" 
                  type="password" 
                  required
                  value={values.logPass || ''}
                  onChange={handleChange}
                />
              
                <p className='popup__error-auth'>{errors.logPass}</p>

              </label>

            </div>

          </PopupWithForm>

        </section>

      }

    </main>
  )
  
}

export default Login;