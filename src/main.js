import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const btnFooter = document.querySelector(".btn-footer");

let page = 1;
let query = "";


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  query = e.target.elements.search.value.trim();
  if (!query) return;

  page = 1;
  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    if (data.hits.length === 0) {
      iziToast.warning({
        message: "Немає результатів для цього запиту",
        position: "topRight",
      });
      return;
    }
    createGallery(data.hits);
  } catch {
    iziToast.error({ message: "Помилка запиту", position: "topRight" });
  } finally {
    hideLoader();
  }

  form.reset();
});


btnFooter.addEventListener("click", async () => {
  if (!query) return;
  page += 1;
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    if (data.hits.length === 0) {
      iziToast.info({ message: "Більше картинок немає", position: "topRight" });
      return;
    }
    createGallery(data.hits);
  } catch {
    iziToast.error({ message: "Помилка запиту", position: "topRight" });
  } finally {
    hideLoader();
  }
});

