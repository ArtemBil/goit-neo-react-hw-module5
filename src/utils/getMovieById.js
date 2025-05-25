import { API_URLS } from './constants.js';
import fetchTmbdData from './request.js';

export default function getMovieById(id) {
  return fetchTmbdData(API_URLS.movieById.replace('{{movieId}}', id));
}