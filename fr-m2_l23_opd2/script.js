// deel 1

import {
    getData
} from './api-client.js'
import {
    getGenres
} from './api-client.js'
import {
    getTopRated
} from './api-client.js'
import {
    getTopRatedAction
} from './api-client.js'
import {
    getMoviesSevenFive
} from './api-client.js'


const setSingleMovie = async () => {
    const data = await getData("tt6105098");
    const movie = data.movie_results[0];
    const topMovieParagraph = document.getElementById("my-top-movie");
    // The Lion King
    topMovieParagraph.appendChild(document.createTextNode(movie.title));
};
setSingleMovie();


const addGenresToDom = async () => {
    const allGenresData = await getGenres();
    const movieGenres = allGenresData.genres;
    const genreParagraph = document.getElementById("genres");
    movieGenres.forEach((genre) => {
        const movieToAdd = document.createElement('li')
        movieToAdd.innerHTML = `genre: ${genre.name}, id: ${genre.id}`
        genreParagraph.appendChild(movieToAdd);
    })
}
addGenresToDom();


const addTopRatedToDom = async () => {
    const topRatedData = await getTopRated();
    const topMovies = topRatedData.results
    const topRatedParagraph = document.getElementById('top-rated');
    topMovies.forEach((topmovie) => {
        const topMovieToAdd = document.createElement('li')
        if (topmovie.release_date.startsWith("2020")) {
            topMovieToAdd.innerHTML = `${topmovie.title}`;
            topRatedParagraph.appendChild(topMovieToAdd);
        }
    })
}
addTopRatedToDom();


const addTopActionToDom = async () => {
    const topActionData = await getTopRatedAction();
    const topActionMovies = topActionData.results;
    const topActionParagraph = document.getElementById('top-rated-action');
    topActionMovies.forEach((actionMovie) => {
        const actionMovieToAdd = document.createElement('li');
        actionMovieToAdd.innerHTML = `${actionMovie.title}`;
        topActionParagraph.appendChild(actionMovieToAdd);
    })
}
addTopActionToDom();

const addSevenFiveToDom = async () => {
    const sevenFiveData = await getMoviesSevenFive();
    const moviesSevenFive = sevenFiveData.results;
    const sevenFiveParagraph = document.getElementById('seven-five');
    moviesSevenFive.forEach((movie) => {
        const movieToAdd = document.createElement('li');
        movieToAdd.innerHTML = `${movie.title}`;
        sevenFiveParagraph.appendChild(movieToAdd);
    })
}
addSevenFiveToDom()

// deel 2