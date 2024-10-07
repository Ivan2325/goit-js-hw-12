import "simplelightbox/dist/simple-lightbox.min.css";

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      (image) => `
      <div class="container">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="subtitle">
            <b>Likes:</b> ${image.likes}
          </p>
          <p class="subtitle">
            <b>Views:</b> ${image.views}
          </p>
          <p class="subtitle">
            <b>Comments:</b> ${image.comments}
          </p>
          <p class="subtitle">
            <b>Downloads:</b> ${image.downloads}
          </p>
        </div>
      </div>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup); 
}



export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

