# Image Search App

Навчальний вебзастосунок для пошуку зображень за допомогою **Pixabay API**.
Проєкт демонструє роботу з асинхронними HTTP-запитами, динамічним створенням
HTML-розмітки, пагінацією та переглядом зображень у повноекранному режимі.

## Live Demo

[**View Live Demo**](https://andrii-mitko.github.io/goit-js-hw-12/)

## Project Overview

Застосунок дозволяє шукати зображення за ключовими словами та переглядати
результати у вигляді адаптивної галереї.

### Main Features

- **Image Search** — пошук зображень через Pixabay API.
- **Axios** — виконання HTTP-запитів до зовнішнього API.
- **Dynamic Gallery** — динамічне створення карток зображень.
- **Pagination** — завантаження наступної сторінки результатів за допомогою
  кнопки Load More.
- **Image Lightbox** — перегляд зображень у збільшеному форматі за допомогою
  SimpleLightbox.
- **Image Information** — відображення кількості Likes, Views, Comments та
  Downloads.
- **Loading Indicator** — індикатор під час завантаження даних.
- **Notifications** — повідомлення про відсутність результатів та помилки
  запитів за допомогою iziToast.
- **Smooth Scrolling** — плавне прокручування сторінки після завантаження нових
  зображень.

## Technologies

- HTML5
- CSS3
- JavaScript (ES Modules)
- Vite
- Axios
- Pixabay API
- SimpleLightbox
- iziToast
- GitHub Pages
- GitHub Actions

## Project Structure

```text
goit-js-hw-12/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── assets/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   └── Gallery/
│   ├── layout/
│   │   └── Container/
│   ├── ui/
│   │   ├── Button/
│   │   └── Loader/
│   ├── services/
│   │   └── pixabay-api.js
│   ├── utils/
│   │   └── render-functions.js
│   ├── styles/
│   ├── img/
│   ├── index.html
│   └── main.js
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

Щоб запустити проєкт локально:

1. Переконайся, що встановлено [Node.js](https://nodejs.org/).
2. Встанови залежності:

   ```bash
   npm install
   ```

3. Запусти сервер розробки:

   ```bash
   npm run dev
   ```

4. Відкрий адресу, яку покаже Vite у терміналі (зазвичай
   `http://localhost:5173`).

### Build

Для створення production-збірки:

```bash
npm run build
```

Для локального перегляду production-збірки:

```bash
npm run preview
```

## Deployment

Проєкт розгортається на **GitHub Pages** за допомогою GitHub Actions.

Workflow автоматично запускає встановлення залежностей, збірку Vite та
публікацію результату в гілку `gh-pages` після push у `main`.

## Learning Objectives

Під час виконання проєкту практикувалися:

- Робота із зовнішніми REST API.
- Використання Axios для HTTP-запитів.
- Асинхронний JavaScript (`async/await`).
- Обробка помилок під час виконання запитів.
- Робота з DOM та динамічним HTML.
- Реалізація пагінації та завантаження даних частинами.
- Робота зі сторонніми JavaScript-бібліотеками.
- Організація коду за модулями.
- Налаштування автоматичного деплою через GitHub Actions.

## Author

**Andrii Mitko**

- GitHub: [Andrii-Mitko](https://github.com/Andrii-Mitko)
- LinkedIn: [Andrii Mitko](https://www.linkedin.com/in/andrii-mitko/)
- Portfolio:
  [andrii-mitko-brand.vercel.app](https://andrii-mitko-brand.vercel.app/)
