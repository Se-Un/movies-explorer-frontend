// импорт структурных файлов
import './Button.css';
// компонент MoreButton
function Button(props) {
  return (
    <>
      <button className={`button ${props.name}`} onClick={props.click}>{props.text}</button>
    </>
  )

}

export default Button;
