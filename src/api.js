import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY
const baseUrl = "https://api.themoviedb.org/3"
export const getMovieList = async function() {
    const Movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
    return Movie.data.results
}

export const searchMovie = async function(q){
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`)
    return search.data
}