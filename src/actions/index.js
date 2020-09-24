import {
    ADD_GENRES,
    TOGGLE_LOADING,
    ADD_MOVIES,
    APPEND_MOVIES,
    CHANGE_PAGES,
    CHANGE_SEARCH_QUERY,
    ADD_TOTAL_RESULTS,
    DISPLAY_INTERNAL_PAGE,
    SET_INTERNAL_PAGE_MOVIE_ID
} from '../constants/index'

export const addMovies = (payload) => ({
    type: ADD_MOVIES,
    payload
})

export const addTotalResults = (payload) => ({
    type: ADD_TOTAL_RESULTS,
    payload
})

export const appendMovies = (payload) => ({
    type: APPEND_MOVIES,
    payload
})

export const addGenres = (payload) => ({
    type: ADD_GENRES,
    payload
})

export const toggleLoading = (payload) => ({
    type: TOGGLE_LOADING,
    payload
})

export const changePages = (payload) => ({
    type: CHANGE_PAGES,
    payload
})


export const changeSearchQuery = (payload) => ({
    type: CHANGE_SEARCH_QUERY,
    payload
})

export const displayInternalPage = (payload) => ({
    type: DISPLAY_INTERNAL_PAGE,
    payload
})

export const setInternalPageMovieID = (payload) => ({
    type: SET_INTERNAL_PAGE_MOVIE_ID,
    payload
})