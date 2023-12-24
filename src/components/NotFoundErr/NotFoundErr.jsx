// импорт зависимостей
import { Link } from 'react-router-dom';
// импорт структурных файлов
import './NotFoundErr.css';
// компонент NotFoundErr
function NotFoundErr() {

  return (
    <main className='not-found'>

      <h1 className='not-found__title'>404</h1>
      
      <p className='not-found__text'>Страница не найдена</p>

      <Link className='not-found__link' to='/'>Назад</Link>

    </main>
  )

}

export default NotFoundErr;