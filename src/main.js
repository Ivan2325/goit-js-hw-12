
import { fetchImages } from './js/paxabay-api.js';
import { renderImages, clearGallery } from './js/render-functions.js';
import iziToast from "izitoast";
import axios from "axios" ;
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.getElementById('search-form');
const loader = document.querySelector('.loader');
let page = 1;
let query = '';

searchForm.addEventListener('submit', onSearch);

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
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: error.message,
      });
    });
}

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}


