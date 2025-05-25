export const TMDB_READ_API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTVlMTQyOWRiYWJkMzAxMWY3MThlMmQxNjM2ZWEwZCIsIm5iZiI6MTc0ODE2NzQyNi4yMDg5OTk5LCJzdWIiOiI2ODMyZWIwMmMyMGFmOTg2ZTZiNmIxMTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WhFkJbK-yhcfweuDW6bGvF7CeATnepZ27KVA_DYaR1w';
export const TMDB_API_URL = 'https://api.themoviedb.org/3/';
export const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
export const API_URLS = {
  trending: '/trending/movie/day?language=en-US',
  movieById: '/movie/{{movieId}}?append_to_response=credits,reviews&language=en-US',
  search: `search/movie?&query={{searchQuery}}&language=en-US`
}