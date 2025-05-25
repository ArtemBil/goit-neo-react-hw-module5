import { TMDB_IMAGE_URL } from './constants.js';

export default function getMoviePosterPath(path) {
  return `${TMDB_IMAGE_URL}${path}`;
}