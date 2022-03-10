const requestURL = './json/peliculas.json';

async function fetchMoviesJSON(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}

fetchMoviesJSON().then(movies => {
    console.log(movies);

})