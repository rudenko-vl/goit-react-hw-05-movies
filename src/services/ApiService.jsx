import axios from 'axios';

const API_KEY = 'api_key=a77369e961bef02c98f1e7312de78767';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
    const response = await axios.get(`/trending/all/week?${API_KEY}`) 
    const data = response.data;
    return data;
}

export const getMoviesByQuery = async (query) => {
    const response = await axios.get(`/search/movie?${API_KEY}&query=${query}`) 
    const data = response.data;
    return data;
}

export const getMovieReview = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews?${API_KEY}`) 
    const data = response.data;
    return data;
}

export const getMovieDetails = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}?${API_KEY}`) 
    const data = response.data;
    return data;
}

export const getMovieCredits = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits?${API_KEY}`) 
    const data = response.data;
    return data;
}
