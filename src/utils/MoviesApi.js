// импорт структурных файлов
import { MOVIE_URL } from "./constants";
// класс MoviesApi
class MoviesApi {
  // конструктор класса
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this.headers = options.headers;
  }
  // метод для возвращения json
  #getResData(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так, ошибка ${res.status}, повторите запрос позже`);
  }
  // метод для получения фильмов
  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: 'GET',
      headers: this.headers,
    })
    .then(this.#getResData);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: MOVIE_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

export default moviesApi;

