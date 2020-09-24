import {
    ADD_GENRES,
    ADD_MOVIES,
    TOGGLE_LOADING,
    APPEND_MOVIES,
    CHANGE_PAGES,
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
    searchQuery: "",
    internalPageMovieId: null,
    displayInternalPage: false
}

/* Root reducer */
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PAGES:
            return ({ ...state, currentPage: action.payload })
        case CHANGE_SEARCH_QUERY:
            return ({ ...state, searchQuery: action.payload })

        case ADD_GENRES:
            return ({ ...state, genres: action.payload })
        case ADD_MOVIES:
            return ({ ...state, movies: action.payload })
        case APPEND_MOVIES:
            return ({ ...state, movies: state.movies.concat(action.payload) })

        case ADD_TOTAL_RESULTS:
            return ({ ...state, totalResults: action.payload })

        case TOGGLE_LOADING:
            return ({ ...state, loading: action.payload })
        case SET_INTERNAL_PAGE_MOVIE_ID:
            return ({ ...state, internalPageMovieId: action.payload })
        case DISPLAY_INTERNAL_PAGE:
            return ({ ...state, displayInternalPage: action.payload })
        default:
            return state;
    }
}

export default rootReducer