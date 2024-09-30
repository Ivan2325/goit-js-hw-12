import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images.map(image => createImageCard(image)).join('');
  gallery.innerHTML = markup;
  refreshLightbox();
}

function createImageCard({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
  return `
  <div class="container">
    <a href="${largeImageURL}" class="gallery-item">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      <div class="info">
        <p class="subtitle"><b>Likes</b> ${likes}</p>
        <p class="subtitle"><b>Views</b> ${views}</p>
        <p class="subtitle"><b>Comments</b> ${comments}</p>
        <p class="subtitle"><b>Downloads</b> ${downloads}</p>
      </div>
    </a>
    </div>
  `;
}

function refreshLightbox() {
  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

