// функция обработчик фильтрации
export const filterMovies = (array, searchQuery) => {
  console.log(searchQuery)

  if(searchQuery.duration) {

    return array.filter((movie) => {

      if(movie.nameEN.trim().toLowerCase().includes(searchQuery.string.toLowerCase()) && movie.duration <= 40) {

        return movie;

      }

      return movie.duration <= 40 ? movie.nameRU.trim().toLowerCase().includes(searchQuery.string.toLowerCase()) : '';

    })   
  }

  return array.filter((movie) => {

    if(movie.nameEN.toLowerCase().includes(searchQuery.string.toLowerCase())) {
      
      return movie;
    
    }
    
    return movie.nameRU.toLowerCase().includes(searchQuery.string.toLowerCase())
  
  });
}
// функция обработчик отображения длительности фильмов
export function handleDurationMovies(duration) {
  const hour = Math.round(duration / 60);
  const minuts = duration % 60;
  
  if(duration >= 60) {
    return `${hour} ч. ${minuts === 0 ? '' : `${minuts} м.`}`;
  }
  return `${minuts} м.`;
}