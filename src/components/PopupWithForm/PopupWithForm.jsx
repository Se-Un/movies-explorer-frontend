// импорт зависимостей
import { Link } from 'react-router-dom';
// импорт структурных файлов
import './PopupWithForm.css';
import Button from '../Button/Button';
// компонент PopupWithForm
function PopupWithForm(props) {
  // функция обработчик отображения кнопок на странице профиля
  function changeBtns() {
    if(props.path.pathname === '/profile') {
      
      return props.saveBtnOpen ?

        <Button name={`button__${props.form}`} text={props.save} changeDisabled={props.valid} />
        :
        <div className={`popup__btn-container-${props.form}`}>

          <button className={`popup__btn popup__btn-${props.form}`} onClick={() => props.click()}>{props.edit}</button>

          <button 
            className= {`popup__btn popup__btn-${props.form} popup__btn-${props.form}_color_red`}
            onClick={props.signoutBtn}
          >{props.logout}</button>

        </div>
    }

     return <div className='popup__btn-container-auth'>

      <Button 
        name='button__auth' 
        text={props.path.pathname === '/signup' ? 'Зарегистрироваться' : 'Войти'} 
        changeDisabled={props.valid} />

      <p className='popup__caption'>

        <span className='popup__text-auth'>

          {props.path.pathname === '/signup' ? 'Уже зарегистрированы?' : 'Ещё не зарегистрированы?'}

        </span>

        <Link className='popup__link' to={props.path.pathname === '/signup' ? '/signin' : '/signup'}>
          
          {props.path.pathname === '/signup' ? 'Войти' : 'Регистрация'}
          
        </Link>

      </p>

    </div>

  }
  // отрисовка компонента PopupWithForm
  return (

      <form className={`popup popup__${props.form}`} onSubmit={props.onSubmit} noValidate>

        {
          props.children
        }

        <div className={`popup__container popup__container-${props.form} popup__container-${props.page}_margin_top`}>

        <p className='popup__error-message'>{props.message}</p>

          {
            changeBtns()
          }
          
        </div>

      </form>

  )
  
}

export default PopupWithForm;