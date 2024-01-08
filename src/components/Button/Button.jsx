// импорт структурных файлов
import './Button.css';
// компонент Button
const Button = (props) => {
  // отрисовка компонента Button
  return (
    <>
      <button 
        className={`button ${props.name}`} 
        onClick={props.click}
        disabled={!props.changeDisabled}
      >
        {props.text}
      </button>
    </>
  )

}

export default Button;
