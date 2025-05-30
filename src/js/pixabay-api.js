import axios from 'axios';

const API_KEY = '50541308-8b3817b4b3c5c4721b4bd6fc3'; 
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 15,
  };
  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
