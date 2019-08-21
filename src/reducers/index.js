import {
    ADD_GENRES,
    ADD_MOVIES,
    TOGGLE_LOADING,
    APPEND_MOVIES,
    CHANGE_PAGES,
    CHANGE_REQUEST_PAGE,
    CHANGE_SEARCH_QUERY,
    ADD_TOTAL_RESULTS,
    SET_INTERNAL_PAGE_MOVIE_ID,
    DISPLAY_INTERNAL_PAGE
} from '../constants/index'

/* Initial state */
const initialState = {
    totalResults: 0,
    movies: [],
    genres: [],
    loading: false,
    moviesPerPage: 5,
    currentPage: 1,
    requestPage: 1,
    totalResults: 0,
    searchQuery: "",
    internalPageMovieId:null,
    displayInternalPage:false
}

/* Root reducer */
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GENRES:
            console.log(ADD_GENRES, action.payload)
            return ({ ...state, genres: action.payload })
        case ADD_MOVIES:
            console.log(ADD_MOVIES, action.payload)
            return ({ ...state, movies: action.payload })
        case ADD_TOTAL_RESULTS:
            console.log(ADD_TOTAL_RESULTS, action.payload)
            return ({ ...state, totalResults: action.payload })
        case CHANGE_PAGES:
            return ({ ...state, currentPage: action.payload })
        case CHANGE_REQUEST_PAGE:
            return ({ ...state, requestPage: action.payload })
        case APPEND_MOVIES:
            console.log(APPEND_MOVIES, action.payload)
            return ({ ...state, movies: state.movies.concat(action.payload) })
        case CHANGE_SEARCH_QUERY:
            console.log(CHANGE_SEARCH_QUERY, action.payload)
            return ({ ...state, searchQuery: action.payload })
        case TOGGLE_LOADING:
            console.log(TOGGLE_LOADING, action.payload)
            return ({ ...state, loading: action.payload })
        case SET_INTERNAL_PAGE_MOVIE_ID:
            console.log(SET_INTERNAL_PAGE_MOVIE_ID, action.payload)
            return ({ ...state, internalPageMovieId: action.payload })
        case DISPLAY_INTERNAL_PAGE:
            console.log(DISPLAY_INTERNAL_PAGE, action.payload)
            return ({ ...state, displayInternalPage: action.payload })
        default:
            return state;
    }
}

export default rootReducer