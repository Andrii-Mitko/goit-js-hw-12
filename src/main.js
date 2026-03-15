
import { getImagesByQuery } from './js/pixabay-api.js';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const btnMore = document.querySelector(".btn-more");

let page = 1;
let query = "";
let totalHits = 0;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  query = e.target.elements.search.value.trim();
  if (!query) return;

  page = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.warning({
        message: "Немає результатів для цього запиту",
        position: "topRight",
      });
      return;
    }

    createGallery(data.hits);


    const loadedImages = data.hits.length;
    if (loadedImages < totalHits) {
      showLoadMoreButton();
    } else {
        hideLoadMoreButton();
        iziToast.info({
    message: "Більше картинок немає",
    position: "topRight",
  });
    }

  } catch {
    iziToast.error({ message: "Помилка запиту", position: "topRight" });
  } finally {
    hideLoader();
  }

  form.reset();
});

btnMore.addEventListener("click", async () => {
  page += 1;
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(query, page);

    if (data.hits.length === 0) {
      hideLoadMoreButton();
      iziToast.info({ message: "Більше картинок немає", position: "topRight" });
      return;
    }

    createGallery(data.hits);

  
    const { height: cardHeight } = document.querySelector(".gallery").firstElementChild.getBoundingClientRect();
    window.scrollBy({ top: cardHeight * 2, behavior: "smooth" });


    const loadedImages = document.querySelectorAll(".gallery-item").length;
    if (loadedImages < totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({ message: "Більше картинок немає", position: "topRight" });
    }

  } catch {
    iziToast.error({ message: "Помилка запиту", position: "topRight" });
  } finally {
    hideLoader();
  }
});