import store from '../../store/index'

import { searchMovieByName, discoverMovieByGenre, discoverMovieByYear } from '../../utils/requests';
import { addMovies, toggleLoading, addTotalResults, changeSearchQuery, appendMovies } from '../../actions';
import { ADD_MOVIES, APPEND_MOVIES } from '../../constants';

/* const mapStateToProps = (state) => {
    return ({
        genres: state.genres
    })
}

const mapDispatchToProps = (dispatch) =>({
    toggleLoading: (status) => dispatch(toggleLoading(status)),
    addMovies: (movies) => dispatch(addMovies(movies)),
}) */


const Search = (searchQuery, mode = ADD_MOVIES, page = 1) => {
    /* dispatch */
    const dispatch = (obj) => store.dispatch(obj)

    dispatch(toggleLoading(true))

    /* Genre search */
    /* checks if the search string is present on the genre array */
    const genres = store.getState().genres;
    let search = genres.find(genre => genre.name === searchQuery || genre.name.toLocaleLowerCase() === searchQuery)
    if (search !== undefined) {
        /* then gets all movies with that genre */
        discoverMovieByGenre(search.id,page).then(res => {
            /* Add to the state */
            dispatch(addTotalResults(res.data.total_results))
            if (mode === ADD_MOVIES) dispatch(addMovies(res.data.results))
            else if (mode === APPEND_MOVIES) dispatch(appendMovies(res.data.results))
            dispatch(toggleLoading(false))
        })
    } else if (searchQuery.length === 4 && searchQuery.match(/(\d+)/) !== undefined) {

        /* Search by year */
        discoverMovieByYear(searchQuery,page).then(res => {
            /* Add to the state */
            dispatch(addTotalResults(res.data.total_results))
            if (mode === ADD_MOVIES) dispatch(addMovies(res.data.results))
            else if (mode === APPEND_MOVIES) dispatch(appendMovies(res.data.results))
            dispatch(toggleLoading(false))
        })
    } else {
        /* Search by name */
        searchMovieByName(searchQuery,page).then(res => {
            /* Add to the state */
            dispatch(addTotalResults(res.data.total_results))
            console.log('page',page)
            if (mode === ADD_MOVIES) dispatch(addMovies(res.data.results))
            else if (mode === APPEND_MOVIES) dispatch(appendMovies(res.data.results))
            dispatch(toggleLoading(false))
        })

    }
    
}


export default Search