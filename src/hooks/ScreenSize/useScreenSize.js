// импорт зависимостей
import { useCallback, useState, useEffect } from "react";
// хук отображения ширины экрана
function useScreenSize() {
  // переменные состояния
  const getScreenWidth = useCallback(() => window.innerWidth, []);
  const [screenWidth, setScreenWidth] = useState(getScreenWidth());
  // эффект для расчета текущей ширины экрана
  useEffect(() => {
    let timer;
    // функция обработчик для сохраненния текущей ширины
    function handleWidthSize() {
      setScreenWidth(getScreenWidth());
    };
    // функция обработчик результата текущей ширины
    function handleChangeResultWidth() {
      if(!timer) {
        timer = setTimeout(() => {
          timer = null;
          handleWidthSize();
        }, 1500);
      }
    }
    // слушатель экрана для установления текущей ширины
    window.addEventListener('resize', handleChangeResultWidth);
    return () => window.removeEventListener('resize', handleChangeResultWidth);

  }, [getScreenWidth]);

  return screenWidth;

}

export default useScreenSize;
