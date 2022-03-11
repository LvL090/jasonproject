const requestURL = "./JSON/peliculas.json";

async function fetchMoviesJSON(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
};
fetchMoviesJSON().then(movies => {
    //console.log(movies);

    for (let index =0; index < movies.peliculas.length; index++) {

        let img = movies.peliculas[index].img;
        let title = movies.peliculas[index].title;
        let rating = movies.peliculas[index].rating;
        
        films.innerHTML += `
        <div class="poster1">
                <img class="poster" src="${img}" alt="">
                <p class="title">${title}</p>
                <p class="rating">${rating}</p>
        </div> 
        `
    }
}
)