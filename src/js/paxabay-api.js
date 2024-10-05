import axios from 'axios';

const API_KEY = '46105341-e9731a626d926c92deaafdc0d';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15, 
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching images');
  }
}



