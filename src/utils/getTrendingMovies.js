import { API_URLS } from './constants.js';
import fetchTmbdData from './request.js';

export default async function getTrendingMovies() {
  return fetchTmbdData(API_URLS.trending);
}