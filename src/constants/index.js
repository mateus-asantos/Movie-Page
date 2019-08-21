/* Action constants */
export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const DISPLAY_INTERNAL_PAGE = 'DISPLAY_INTERNAL_PAGE';  
export const SET_INTERNAL_PAGE_MOVIE_ID = 'SET_INTERNAL_PAGE_MOVIE_ID';

export const ADD_GENRES = 'ADD_GENRES';
export const ADD_TOTAL_RESULTS = 'ADD_TOTAL_RESULTS';
export const ADD_MOVIES = 'ADD_MOVIES';
export const APPEND_MOVIES = 'APPEND_MOVIES';

export const CHANGE_PAGES = 'CHANGE_PAGES';
export const CHANGE_SEARCH_QUERY = 'CHANGE_SEARCH_QUERY';
export const CHANGE_REQUEST_PAGE = 'CHANGE_REQUEST_PAGE';



/* API constants */

/* API key */
export const api_key = 'b9dd6f17b01b1cd93a248f317ed216b5';
/* url to get movies by name */
export const api_search_url = (query, page) => 'https://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&language=pt-BR&query=' + query + '&page=' + page + '&include_adult=false';
/* url to get a list of genres */
export const api_genres_url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + api_key + '&language=pt-BR';
/* url to get movies by genre */
export const api_discover_with_genre_id_url = (genreID, page) => 'https://api.themoviedb.org/3/discover/movie?api_key=b9dd6f17b01b1cd93a248f317ed216b5&language=pt-BR&sort_by=vote_count.desc&include_adult=false&include_video=false&page=' + page + '&with_genres=' + genreID;
/* url to get movies by year */
export const api_discover_with_year_url = (year, page) => 'https://api.themoviedb.org/3/discover/movie?api_key=b9dd6f17b01b1cd93a248f317ed216b5&language=pt-BR&sort_by=vote_count.desc&include_adult=false&include_video=false&page=' + page + '&primary_release_year=' + year;
/* url to get a specific movie */
export const api_get_movie = (movieID) => 'https://api.themoviedb.org/3/movie/'+ movieID +'?api_key=' + api_key + '&language=pt-BR'
/* Url to get movie videos */
export const api_get_movie_videos = (movieID) => 'https://api.themoviedb.org/3/movie/'+ movieID +'/videos?api_key=' + api_key + '&language=pt-BR'
