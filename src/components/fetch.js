const apiKey = import.meta.env.VITE_API_KEY;
const URL_API = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
const URL_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;

export const getMovies = async (query) => {
  let url = query ? `${URL_SEARCH}${query}` : URL_API;
  const response = await fetch(url);
  const json = await response.json();
  return json.results;
};

export const getMovieDetail = async (id) => {
  const URL_MOVIE = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  const response = await fetch(URL_MOVIE);
  const json = await response.json();
  return json;
};

export const getCast = async (id) => {
  const URL_CAST = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
  const response = await fetch(URL_CAST);
  const json = await response.json();
  return json.cast;
};

