// импорт зависимостей
import { useContext, useEffect, useState } from 'react';
// импорт структурных файлов
import './Profile.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useValidation } from '../../hooks/Validation/useValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Preloader from '../Preloader/Preloader';
// компонент Profile
function Profile (props) {
  // переменные состояния
  const [ saveBtn, setSaveBtn ] = useState(false)
  const [ disable, setDisable ] = useState(true);
  const currentUser = useContext(CurrentUserContext);
  // деструктуризация переменных из хука валидации
  const { values, setValues, handleChange, errors, resetForm, isValid } = useValidation();
  // эффект для подстановки действующих данных пользователя
  useEffect(() => {
    if(currentUser) {
      setValues({
        ...values,
        profileName: currentUser.name,
        profileEmail: currentUser.email,
      })
    }
  }, [])
  // функция обработчик клика по Редактировать
  function handleClickEdit() {
    setSaveBtn(true);
    setDisable(false);
  }
  // функция обработчик отправки формы
  function handleSubmit(evt) {
    evt.preventDefault();

    props.handleProfile({
      name: values.profileName,
      email: values.profileEmail,
    });
    setSaveBtn(false)
    setDisable(true);
    resetForm();
  }
  // отрисовка компонентов Profile
  return (

    <main className='profile'>

      {
        
        props.load ? <Preloader /> :

        <section className='profile__section'>

          <h1 className='profile__title'>
            {`Привет, ${currentUser.name}!`}
          </h1>

          <PopupWithForm
            form='profile'
            click={handleClickEdit}
            saveBtnOpen={saveBtn}
            path={props.locate}
            save='Сохранить'
            edit='Редактировать'
            logout='Выйти из аккаунта'
            signoutBtn={props.onSignout}
            valid={isValid}
            onSubmit={handleSubmit}
            message={props.message}
          >

            <div className='popup__labels-profile'>
            
              <label className='popup__label-profile'>
              
                <span className='popup__span-profile'>Имя</span>
              
                <input 
                  className='popup__input-profile' 
                  type="text"
                  name='profileName' 
                  placeholder='Имя' 
                  minLength={2} 
                  maxLength={30}
                  required
                  value={values.profileName || ''}
                  onChange={handleChange}
                  disabled={disable} 
                />

              </label>

              <p className='popup__error-profile popup__error-profile_margin_top'>{errors.profileName}</p>

              <div className='popup__line-profile'></div>

              <label className='popup__label-profile popup__label-profile_margin_top'>

                <span className='popup__span-profile'>E-mail</span>

                <input 
                  className='popup__input-profile' 
                  type="email"
                  name='profileEmail'
                  placeholder="e-mail" 
                  required
                  value={values.profileEmail || ''}
                  onChange={handleChange} 
                  disabled={disable} 
                />

              </label>

              <p className='popup__error-profile'>{errors.profileEmail}</p>

            </div>

          </PopupWithForm>

        </section>

      }

    </main>

  )
  
}

export default Profile;