// импорт структурных файлов
import { MAIN_URL } from "./constants";
// класс MainApi
class MainApi {
  // конструктор класса
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
    this.credentials = options.credentials;
  }
  // метод возвращения json
  #getResData(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так, ошибка ${res.status}, повторите запрос позже`);
  }
  // метод регистрации пользователя
  registerUser(name, email, password) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      credentials: this.credentials,
      headers: this.headers,
      body: JSON.stringify({name, email, password})
    })
    .then(this.#getResData);
  };
  // метод авторизации пользователя
  loginUser(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      credentials: this.credentials,
      headers: this.headers,
      body: JSON.stringify({email, password}),
    })
    .then(this.#getResData);
  };
  // метод выхода из аккаунта пользователя
  logoutUser() {
    return fetch(`${this.baseUrl}/signout`, {
      method: 'GET',
      credentials: this.credentials,
      headers: this.headers,
    })
    .then(this.#getResData);
  }
  // метод для получения данных пользователя
  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      credentials: this.credentials,
      headers: this.headers
    })
    .then(this.#getResData);
  }
  // метод обновления данных пользователя
  patchUserInfo(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: this.credentials,
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    })
    .then(this.#getResData);
  }
  // метод для получения сохраненных фильмов
  getUserMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'GET',
      credentials:this.credentials,
      headers: this.headers,
    })
    .then(this.#getResData);
  }
  // метод для сохраненния фильмов пользователем
  postUserMovies(data) {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'POST',
      credentials: this.credentials,
      headers: this.headers,
      body: JSON.stringify(data),
    })
    .then(this.#getResData);
  }
  // метод для удаления фильмов пользователем
  removeUserMovies(id) {
    return fetch(`${this.baseUrl}/movies/${id}`, {
      method: 'DELETE',
      credentials: this.credentials,
      headers: this.headers,
    })
    .then(this.#getResData);
  }

}

const mainApi = new MainApi({
  baseUrl: MAIN_URL,
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
})

export default mainApi;