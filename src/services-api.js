import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const API_KEY = "dfc1c289bf84770ee5d30ab0d8a53292";
axios.defaults.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmMxYzI4OWJmODQ3NzBlZTVkMzBhYjBkOGE1MzI5MiIsInN1YiI6IjY2MmJjYjE1YzFlNTZlMDExY2YxZDE3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UbhLO_Fx3xQOmbZBi9xj2bR-vNok-S1hf4MZCTYCY1Q'
axios.defaults.headers['accept'] = 'application/json'

export const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'

export const fetchTrendingMovies = async () => {
    const resp = await axios.get('/trending/movie/day')
    return resp.data.results
}

export const fetchMovieDetails = async (id) => {
    const resp = await axios.get(`/movie/${id}`)
    return resp.data
}

export const fetchMovieCast  = async (id) => {
    const resp = await axios.get(`/movie/${id}/credits?language=en`)
    return resp.data.cast
}

export const fetchMovieReviews = async (id) => {
    const resp = await axios.get(`/movie/${id}/reviews`)
    return resp.data.results
}

export const searchMovies = async (searchword) => {
    const resp = await axios.get(`/search/movie?query=${searchword}`)
    return resp.data.results
}
