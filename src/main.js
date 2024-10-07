
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
  loadMoreBtn.classList.add('hidden');  // Приховуємо кнопку перед новим пошуком
  fetchAndRenderImages();
}

function fetchAndRenderImages() {
  showLoader();  // Показуємо лоадер перед початком запиту
  
  fetchImages(query, page)
    .then(data => {
      hideLoader();  // Ховаємо лоадер після отримання результатів

      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      renderImages(data.hits);  // Рендеримо зображення

      iziToast.success({
        title: 'Success',
        message: `Found ${data.totalHits} images`,
      });
      
      // Якщо є ще результати для завантаження
      if (data.hits.length === 15) {  // Перевірка на те, чи є ще результати
        loadMoreBtn.classList.remove('hidden');  // Показуємо кнопку "Load More"
      } else {
        loadMoreBtn.classList.add('hidden');  // Ховаємо кнопку, якщо результатів більше немає
      }

      // Скрол на висоту двох карток
      const cardHeight = document.querySelector('.gallery').firstElementChild.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth'
      });
    })
    .catch(error => {
      hideLoader();  // Ховаємо лоадер у випадку помилки
      iziToast.error({
        title: 'Error',
        message: error.message,
      });
    });
}

function onLoadMore() {
  page += 1;
  loadMoreBtn.classList.add('hidden');  // Ховаємо кнопку під час завантаження
  fetchAndRenderImages();  // Завантажуємо наступну сторінку
}

function showLoader() {
  loader.style.display = 'block';  // Показуємо лоадер
}

function hideLoader() {
  loader.style.display = 'none';  // Ховаємо лоадер
}
