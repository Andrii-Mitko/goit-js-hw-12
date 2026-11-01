# Image Search App

Навчальний вебзастосунок для пошуку зображень за допомогою **Pixabay API**.
Проєкт створений на JavaScript із використанням Vite та демонструє роботу з
асинхронними HTTP-запитами, DOM, пагінацією й динамічним рендерингом галереї.

## Live Demo

[**View Live Demo**](https://andrii-mitko.github.io/goit-js-hw-12/)

## Project Overview

Застосунок дозволяє знаходити фотографії за ключовими словами, переглядати
результати в адаптивній галереї та відкривати зображення у збільшеному форматі.

## Features

- **Image Search** — пошук фотографій через Pixabay API.
- **HTTP Requests** — виконання запитів до API за допомогою Axios.
- **Dynamic Gallery** — створення карток зображень на основі отриманих даних.
- **Image Information** — відображення кількості вподобань, переглядів,
  коментарів і завантажень.
- **Pagination** — завантаження наступних результатів кнопкою Load More.
- **Image Lightbox** — перегляд зображень у збільшеному форматі за допомогою
  SimpleLightbox.
- **Loading Indicator** — індикатор під час завантаження результатів.
- **Notifications** — повідомлення про відсутність результатів, завершення
  списку та помилки запитів за допомогою iziToast.
- **Smooth Scrolling** — плавне прокручування сторінки після завантаження
  наступної порції зображень.

## Technologies

- HTML5
- CSS3
- JavaScript (ES Modules)
- Vite
- Axios
- Pixabay API
- SimpleLightbox
- iziToast
- GitHub Actions
- GitHub Pages

## Project Structure

```text
goit-js-hw-12/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── assets/
│   ├── deploy-status.png
│   ├── gh-actions-perm-1.png
│   ├── gh-actions-perm-2.png
│   ├── how-it-works.png
│   ├── repo-settings.png
│   ├── template-step-1.png
│   └── template-step-2.png
├── src/
│   ├── css/
│   │   ├── animations.css
│   │   ├── base.css
│   │   ├── container.css
│   │   ├── header.css
│   │   ├── reset.css
│   │   └── styles.css
│   ├── img/
│   │   ├── webp/
│   │   │   └── vite-logo.webp
│   │   ├── favicon.svg
│   │   ├── javascript.svg
│   │   ├── logo.svg
│   │   ├── sprite.svg
│   │   └── vite-logo.png
│   ├── js/
│   │   ├── pixabay-api.js
│   │   └── render-functions.js
│   ├── index.html
│   └── main.js
├── .editorconfig
├── .gitignore
├── .prettierrc.json
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Getting Started

To run the project locally:

1. Make sure [Node.js](https://nodejs.org/) is installed.
2. Clone the repository:

   ```bash
   git clone https://github.com/Andrii-Mitko/goit-js-hw-12.git
   ```

3. Navigate to the project directory:

   ```bash
   cd goit-js-hw-12
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL provided by Vite in your terminal (usually
   `http://localhost:5173`).

## Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Deployment

The project is deployed to **GitHub Pages** using **GitHub Actions**.

The workflow `.github/workflows/deploy.yml` runs automatically after a push to
the `main` branch. It installs dependencies, builds the project using
`npm run build`, and deploys the contents of the `dist/` directory to the
`gh-pages` branch.

## Learning Objectives

The project provides practical experience with:

- Fetching data from external REST APIs.
- Making HTTP requests using Axios.
- Asynchronous JavaScript (`async/await`) and error handling.
- DOM manipulation and dynamic HTML rendering.
- Implementing pagination and loading data in batches.
- Using third-party JavaScript libraries.
- Organizing JavaScript code with ES modules.
- Configuring automated deployment using GitHub Actions.

## Author

**Andrii Mitko**

- GitHub: [Andrii-Mitko](https://github.com/Andrii-Mitko)
- LinkedIn: [Andrii Mitko](https://www.linkedin.com/in/andrii-mitko/)
- Portfolio:
  [andrii-mitko-brand.vercel.app](https://andrii-mitko-brand.vercel.app/)
