
import { fetchImages } from './js/paxabay-api.js';
import { renderImages, clearGallery } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.getElementById('search-form');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more'); 
let page = 1;
let query = '';

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(event) {
  event.preventDefault();
  query = event.target.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query',
    });
    return;
  }

  clearGallery();
  page = 1;
  loadMoreBtn.classList.add('hidden');  // Зміна: Приховуємо кнопку перед новим запитом
  fetchAndRenderImages();
}

function fetchAndRenderImages() {
  showLoader();
  
  fetchImages(query, page)
    .then(data => {
      hideLoader();

      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      renderImages(data.hits);
      
      iziToast.success({
        title: 'Success',
        message: `Found ${data.totalHits} images`,
      });
      
      if (page === 1) { // Зміна: Показуємо кнопку після першого запиту
        loadMoreBtn.classList.remove('hidden');
      }
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: error.message,
      });
    });
}

function onLoadMore() {
  page += 1;
  fetchAndRenderImages();
}

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}
