const favoriteMovie = {
    title: 'The dark knight',
    duration: 2.33,
    stars: ['Batman', 'the Joker', 'Alfred', 'Harvey Dent'],
}

const aboutMovie = (movie) => {
    return `${movie.title} lasts for ${movie.duration} hours. Stars: ${movie.stars}.`;
}

console.log(aboutMovie(favoriteMovie));