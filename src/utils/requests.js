import Axios from 'axios';

import { api_search_url, api_genres_url,api_discover_with_genre_id_url, api_discover_with_year_url, api_get_movie, api_get_movie_videos } from '../constants';



export const getGenreList = async () =>{
    return await Axios.get(api_genres_url)
}

export const searchMovieByName = async (query, page=1) => {
    return await Axios.get(api_search_url(query, page))
}

export const discoverMovieByGenre = async (genreID, page=1) =>{
    return await Axios.get(api_discover_with_genre_id_url(genreID,page))
}

export const discoverMovieByYear = async (year,page=1) =>{
    return await Axios.get(api_discover_with_year_url(year,page))
}

export const getMovie = async (movieID) =>{
    return await Axios.get(api_get_movie(movieID))
}

export const getMovieVideos = async(movieID) =>{
    return await Axios.get(api_get_movie_videos(movieID))
}

