// импорт структурных фалов
import './AboutProject.css';
import MainCompTitle from '../MainCompTitle/MainCompTitle';
// компонент AboutProject
function AboutProject() {

  return (
    <section className='about-project' id='about-project'>

      <MainCompTitle class='main-comp-title' text='О проекте' />
      
      <div className='about-project__text'>
        
        <div className='about-project__text-container'>
          
          <h3 className='about-project__text-title'>Дипломный проект включал 5 этапов</h3>
          
          <p className='about-project__text-par'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>

        </div>
        
        <div className='about-project__text-container'>
          
          <h3 className='about-project__text-title'>На выполнение диплома ушло 5 недель</h3>
          
          <p className='about-project__text-par'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>

        </div>

      </div>
      
      <div className='about-project__timeline'>
        
        <div className='about-project__timeline-container'>
          
          <p className='about-project__timeline-week about-project__timeline-week_background_color'>1 неделя</p>
          
          <p className='about-project__timeline-part'>Back-end</p>

        </div>

        <div className='about-project__timeline-container_right_width'>

          <p className='about-project__timeline-week'>4 недели</p>

          <p className='about-project__timeline-part'>Front-end</p>

        </div>
        
      </div>

    </section>
  )

}

export default AboutProject;
