const API_KEY = "fcabf0c452904d4f09e359d56ce644ce";

let searchbox = document.getElementById("searchbox");

searchbox.addEventListener("keyup", onSearch);

function onSearch(event) {
  if (event.keyCode == 13) {
    fetchMovies(searchbox.value);
  }
}

function fetchMovies(query) {}
