// импорт зависимостей
import { useState } from 'react';
// импорт структурных файлов
import './Profile.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
// компонент Profile
function Profile (props) {
  // переменные состояния
  const [ saveOpen, setSaveOpen ] = useState(false);
  const [ disable, setDisable ] = useState(true);
   // функция обработчик клика по Редактировать
  function handleClickEdit() {
     setSaveOpen(true);
     setDisable(false);
  }

  return (
    <main className='profile'>

      <h1 className='profile__title'>
        {`Привет, ${props.name}!`}
      </h1>

      <PopupWithForm
        form='profile'
        saveBtnOpen={saveOpen}
        click={handleClickEdit}
        path={props.locate}
        save='Сохранить'
        edit='Редактировать'
        logout='Выйти из системы'
      >

        <label className='popup__label-profile'>

          <span className='popup__span-profile'>Имя</span>

          <input 
            className='popup__input-profile' 
            type="text" 
            placeholder='Виталий' 
            minLength="2" 
            maxLength="30" 
            required 
            disabled={disable} 
          />

        </label>

        <div className='popup__line-profile'></div>

        <label className='popup__label-profile popup__label-profile_margin_top'>

          <span className='popup__span-profile'>E-mail</span>

          <input 
            className='popup__input-profile' 
            type="email"
            placeholder="pochta@yandex.ru" 
            required 
            disabled={disable} 
          />

        </label>

      </PopupWithForm>

  </main>
  )
  
}

export default Profile;