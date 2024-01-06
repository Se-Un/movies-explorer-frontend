// адреса апи
export const MOVIE_URL = "https://api.nomoreparties.co";
export const MAIN_URL = "http://localhost:3000";
//export const MAIN_URL = "https://api.kim.diplom.nomoredomainsmonster.ru"
// ссылки навигации шапки и бургера
export const links = [
  {text: 'Главная', href: '/'},
  {text: 'Фильмы', href: '/movies'},
  {text: 'Сохранённые фильмы', href: '/saved-movies'},
];
// ссылки подвала
export const footerLinks = {
  yandex: 'https://practicum.yandex.ru',
  github: 'https://github.com'
};
// объект с типами разрешения экрана
export const dataSreenSize = {
  hd: {
    width: 1279,
    render: 16,
    more: 4,
  },
  desktop: {
    width: 870,
    render: 12,
    more: 3,
  },
  tablet: {
    width: 721,
    render: 8,
    more: 2,
  },
  mobile: {
    width: 320,
    render: 5,
    more: 2,
  }
}
// переменные с именем страниц для локалсторэдж
export const localMovies = 'moviesStorage';
export const localJwt = 'jwt';
