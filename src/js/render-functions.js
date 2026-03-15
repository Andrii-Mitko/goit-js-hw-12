import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
export const btnMore = document.querySelector(".btn-more");

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
<li class="gallery-item">
  <a href="${largeImageURL}">
    <img src="${webformatURL}" alt="${tags}" />
    <div class="info">
      <p>Likes ${likes}</p>
      <p>Views ${views}</p>
      <p>Comments ${comments}</p>
      <p>Downloads ${downloads}</p>
    </div>
  </a>
</li>`
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = "";
}

export function showLoader() {
  loader.classList.add("visible");
}

export function hideLoader() {
  loader.classList.remove("visible");
}

export function showLoadMoreButton() {
  btnMore.classList.add("visible");
}

export function hideLoadMoreButton() {
  btnMore.classList.remove("visible");
}