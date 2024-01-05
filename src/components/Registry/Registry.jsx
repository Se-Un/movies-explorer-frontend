// импорт структурных файлов
import './Registry.css';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useValidation } from '../../hooks/Validation/useValidation';
import Preloader from '../Preloader/Preloader';
// компонент регистрации
function Registry (props) {
  // деструктуризация переменных из хука валидации
  const { values, handleChange, errors, resetForm, isValid } = useValidation();
  // функция обработчик сабмита
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onRegistry(values.regName, values.regEmail, values.regPass);
    resetForm();
  }
  // отрисовка компонента Registry
  return (

    <main className="registry">

      {

        props.load ? <Preloader /> :

        <section className='registry__section'>

          <PopupWithForm 
            form='auth' 
            path={props.locate} 
            onSubmit={handleSubmit}  
            valid={isValid}
            message={props.message}
          >

            <div className='popup__labels-auth'>

              <label className='popup__label-auth'>
    
                <span className='popup__span-auth'>Имя</span>
    
                <input 
                  className='popup__input-auth'
                  type="text"
                  name='regName' 
                  placeholder='Введите ваше имя'
                  minLength={2}
                  maxLength={30}
                  required={true}
                  value={values.regName || ''}
                  onChange={handleChange}
                />

                <p className='popup__error-auth'>{errors.regName}</p>
    
              </label>

              <label className='popup__label-auth'>
    
                <span className='popup__span-auth'>E-mail</span>

                <input 
                  className='popup__input-auth popup__input-auth_letter_spacing' 
                  type="email"
                  placeholder="Введите ваш e-mail"
                  name='regEmail' 
                  required
                  value={values.regEmail || ''}
                  onChange={handleChange} 
                />

                <p className='popup__error-auth'>{errors.regEmail}</p>

              </label>

              <label className='popup__label-auth'>

                <span className='popup__span-auth'>Пароль</span>

                <input 
                  className='popup__input-auth'
                  type="password" 
                  name='regPass' 
                  placeholder='Введите ваш пароль' 
                  required 
                  value={values.regPass || ''}
                  onChange={handleChange} 
                />

                <p className='popup__error-auth'>{errors.regPass}</p>

              </label>

            </div>

          </PopupWithForm>

          

        </section>
        
      }

    </main>
    
  )
  
}

export default Registry;