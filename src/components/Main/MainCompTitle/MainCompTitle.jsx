// импорт структурных файлов
import './MainCompTitle.css';
// компонент MainCompTitle
const MainCompTitle = (props) => {

  return (
    <>
      <h2 className={props.class}>{props.text}</h2>
    </>
  )

}

export default MainCompTitle;