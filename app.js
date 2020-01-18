const API_KEY = "fcabf0c452904d4f09e359d56ce644ce";
const BASE_URL = "https://api.themoviedb.org/3";
let searchbox = document.getElementById("searchbox");

searchbox.addEventListener("keyup", onSearch);

function onSearch(event) {
  if (event.keyCode == 13) {
    fetchMovies(searchbox.value);
  }
}

function fetchMovies(query) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=movie&page=${query}`;
  fetch(url)
    .then(response => response.json())
    .then(responseBody => showMovies(responseBody.results));
}

function showMovies(movies) {
  for (let i = 0; i < movies.length; i++) {
    showMovie(movies[i]);
  }
}

function showMovie(movie) {
  console.log(movie.title);
}
