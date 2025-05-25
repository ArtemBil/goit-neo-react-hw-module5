import { API_URLS, TMDB_IMAGE_URL } from './constants.js';
import fetchTmbdData from './request.js';

export default function getMoviesBySearchQuery(searchQuery) {
  console.log(`${API_URLS.search.replace('{{searchQuery}}', searchQuery)}`);
  return fetchTmbdData(API_URLS.search.replace('{{searchQuery}}', searchQuery));
}