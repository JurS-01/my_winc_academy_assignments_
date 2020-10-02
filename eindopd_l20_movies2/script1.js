import {
    movies
} from './movies.js'

const movieListUl = document.getElementById('movie-list-ul')

const addMoviesToDom = () => {
    movies.forEach((movie) => {
        const movieToAdd = document.createElement('li')
        movieToAdd.innerHTML =
            `<a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank"><img src=\"${movie.Poster}"></a><br>
            <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">${movie.Title}</a>`
        movieListUl.appendChild(movieToAdd)
    })
}
addMoviesToDom()

const filterMovies = (e) => {
    movieListUl.innerHTML = ""
    movies.forEach((movie) => {
        const movieToAdd = document.createElement('li');
        movieToAdd.innerHTML =
            `<a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank"><img src=\"${movie.Poster}"></a><br>
            <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">${movie.Title}</a>`
        switch (e.target.value) {
            case 'Batman':
                if (movie.Title.includes('Batman') == true) {
                    movieListUl.appendChild(movieToAdd);
                }
                break
            case 'Avengers':
                if (movie.Title.includes('Avengers') == true) {
                    movieListUl.appendChild(movieToAdd);
                }
                break
            case 'X-Men':
                if (movie.Title.includes('X-Men') == true) {
                    movieListUl.appendChild(movieToAdd);
                }
                break
            case 'Princess':
                if (movie.Title.includes('Princess') == true) {
                    movieListUl.appendChild(movieToAdd);
                }
                break
            case 'New':
                if (Number(movie.Year) >= 2014) {
                    movieListUl.appendChild(movieToAdd);
                }
                break
            case 'All':
                movieListUl.appendChild(movieToAdd);
                break
            default:
                movieListUl.appendChild(movieToAdd);
        }
    })
}

const radioButtons = document.querySelectorAll('.radio-filter')
radioButtons.forEach((button) => button.addEventListener('click', filterMovies))



// Search

const searchForm = document.querySelector('#search-form')

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    movieListUl.innerHTML = ""
    movies.forEach((movie) => {
        const movieToAdd = document.createElement('li');
        movieToAdd.innerHTML =
            `<a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank"><img src=\"${movie.Poster}"></a><br>
            <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">${movie.Title}</a>`
        if (movie.Title.includes(event.target.searchField.value) == true) {
            movieListUl.appendChild(movieToAdd);
        }
    })
})