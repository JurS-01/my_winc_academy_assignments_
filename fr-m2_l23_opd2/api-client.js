const API_KEY = "a9c523bdaf11f4147c890b4269cb878d";
const base_endpoint = " https://api.themoviedb.org/3";

export const getData = async movieId => {
    // https://api.themoviedb.org/3/movie/550?api_key=a9c523bdaf11f4147c890b4269cb878d
    // https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=en-US&external_source=imdb_id
    // const movieByIDEndpoint = `${base_endpoint}/movie/${movieId}?api_key=${API_KEY}`;
    const movieByIDEndpoint = `${base_endpoint}/find/${movieId}?external_source=imdb_id&api_key=${API_KEY}`
    try {
        const res = await fetch(movieByIDEndpoint, {
            method: "GET"
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

export const getGenres = async () => {
    // https://api.themoviedb.org/3/genre/movie/list?api_key=a9c523bdaf11f4147c890b4269cb878d&language=en-US
    const genresByEndpoint = `${base_endpoint}/genre/movie/list?api_key=${API_KEY}&language=en-US`;
    try {
        const res = await fetch(genresByEndpoint, {
            method: "GET"
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

export const getTopRated = async () => {
    // https://api.themoviedb.org/3/movie/top_rated?api_key=a9c523bdaf11f4147c890b4269cb878d&language=en-US&page=1
    const topRatedByEndpoint = `${base_endpoint}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    try {
        const res = await fetch(topRatedByEndpoint, {
            method: "GET"
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


export const getTopRatedAction = async () => {
    //https://api.themoviedb.org/3/discover/movie?api_key=a9c523bdaf11f4147c890b4269cb878d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
    //https://api.themoviedb.org/3/discover/movie?api_key=a9c523bdaf11f4147c890b4269cb878d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_year=2019&vote_count.gte=300&vote_average.gte=8&with_genres=28

    const topRatedActionEndpoint = `${base_endpoint}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_year=2019&vote_count.gte=300&vote_average.gte=8&with_genres=28

    `
    try {
        const res = await fetch(topRatedActionEndpoint, {
            method: "GET"
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


export const getMoviesSevenFive = async () => {
    // https://api.themoviedb.org/3/discover/movie?api_key=a9c523bdaf11f4147c890b4269cb878d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1975
    const sevenFiveEndpoint = `${base_endpoint}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1975`
    try {
        const res = await fetch(sevenFiveEndpoint, {
            method: "GET"
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}