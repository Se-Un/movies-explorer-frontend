// импорт структурных файлов
import './AboutMe.css';
import photo from '../../../images/student-foto.png';
import MainCompTitle from '../MainCompTitle/MainCompTitle';
import Portfolio from '../Portfolio/Portfolio';
// компонент AboutMe
function AboutMe() {

  return(

    <section className='about-me' id='student'>

      <MainCompTitle class='main-comp-title main-comp-title_student_width' text='Студент' />

      <div className='about-me__container'>

        <div className='about-me__content'>

          <h3 className='about-me__title'>Виталий</h3>

          <p className='about-me__prof-age'>Фронтенд-разработчик, 30 лет</p>

          <p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того,
            как прошёл курс по  веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
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