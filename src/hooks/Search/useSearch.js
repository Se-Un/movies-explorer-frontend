// импорт зависимостей
import { useEffect, useState } from "react";
// импорт структурных файлов;
import { localMovies } from "../../utils/constants";
import { filterMovies } from "../../utils/utils";
// хук отображения результата поиска
export function useSearch(setLoading, array, error, page) {
  // переменные состояния
  const [ text, setText ] = useState('');
  const [ filtered, setFiltered ] = useState([]);
  const [ queryStorage, setQueryStorage ] = useState({
    searchString: "",
    filterDuration: false,
    data: [],
  });
  // эффект сохранения данных из локалсторэдж
  useEffect(() => {
    if(localMovies in localStorage) {
      setQueryStorage(JSON.parse(localStorage.getItem(localMovies)));
    }
  }, [page]);
  // эффект сохранения массива, для отрисовки карточек при обновлении страницы
  useEffect(() => {
    if(page === 'movies') {
      setFiltered(queryStorage.data);
    };
  }, [page, queryStorage]);
  // эффект отображения карточек на странице сохраненных фильмов
  useEffect(() => {
    if(page === 'saved') {
      setFiltered(array)
    };
  }, [page, array]);
  // функция обработчик отображения результата поиска
  function submitFilterMovies(searchQuery) {
    // изменить состояние setLoading, чтобы запустить прелоудер
    setLoading(true);
    // сохранить массив отфильтрованных данных
    const arr = filterMovies(array, searchQuery);
    //создать задержку отображения
    setTimeout(() => {
      // изменить состояние текста ошибки, на пустое
      setText('');
      // изменить состояния переменной для хранения отфильтрованных данных массива
      setFiltered(arr);
      //создать условие при пустом значении
      if(searchQuery.string === '') {
        setFiltered([]);
        setText('Нужно ввести ключевое слово!');
      }
      //создать условие,при получении пустого массива
      if(arr.length === 0) {
        setFiltered([]);
        setText('Ничего не найдено!')
      }
      // создать условие при получении ошибки от апи сервера
      if(error.err) {
        setText(error.message);
      }
       
    }, 800)
    // создать задержку
    setTimeout(() => {
      // изменить состояние переменной Loading для прекращения работы прелоудера
      setLoading(false);
    }, 400);
    // создать условие сохранения данных в локалсторэдж, на странице movies
    if(page === 'movies') {
      localStorage.setItem(localMovies, JSON.stringify({
        string: searchQuery.string,
        duration: searchQuery.duration,
        data: arr,
      }))
    }
    
  }

  return {filtered, submitFilterMovies, text}
}

