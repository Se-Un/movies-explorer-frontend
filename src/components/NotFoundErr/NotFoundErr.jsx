// импорт зависимостей
import { useNavigate } from 'react-router-dom';
// импорт структурных файлов
import './NotFoundErr.css';
// компонент NotFoundErr
function NotFoundErr() {
  // переменная навигации
  const navigate = useNavigate();

  return (
    <main className='not-found'>

      <h1 className='not-found__title'>404</h1>
      
      <p className='not-found__text'>Страница не найдена</p>

      <button className='not-found__btn' type='button' onClick={() => {navigate(-1)}}>Назад</button>

    </main>
  )

}

export default NotFoundErr;