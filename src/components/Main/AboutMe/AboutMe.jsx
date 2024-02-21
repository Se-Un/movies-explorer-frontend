// импорт структурных файлов
import './AboutMe.css';
import photo from '../../../images/me.jpeg';
import MainCompTitle from '../MainCompTitle/MainCompTitle';
import Portfolio from '../Portfolio/Portfolio';
// компонент AboutMe
function AboutMe() {

  return(

    <section className='about-me' id='student'>

      <MainCompTitle class='main-comp-title main-comp-title_student_width' text='Студент' />

      <div className='about-me__container'>

        <div className='about-me__content'>

          <h3 className='about-me__title'>Kim Se-Un</h3>

          <p className='about-me__prof-age'>Фронтенд-разработчик, 29 лет</p>

          <p className='about-me__description'>Я  живу в Санкт-Петербурге, закончил факультет экономики РГГМУ. Я люблю слушать музыку, а ещё увлекаюсь компьютерными играми. В настоящее время изучаю вэб разработку.
          </p>

          <a className='about-me__link' href='https://github.com/Se-Un' target='blank'>Github</a>

        </div>

        <img className='about-me__photo' src={photo} alt="тут было фото студента :(" />

      </div>

      <Portfolio />

    </section>
  )

}

export default AboutMe;