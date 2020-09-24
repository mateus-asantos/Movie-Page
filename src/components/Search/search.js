import store from '../../store/index'

import { searchMovieByName, discoverMovieByGenre, discoverMovieByYear } from '../../data/requests';
import { addMovies, toggleLoading, addTotalResults, appendMovies } from '../../actions';
import { ADD_MOVIES, APPEND_MOVIES } from '../../constants';



const Search = (searchQuery, mode = ADD_MOVIES, page = 1) => {
    /* dispatch */
    const dispatch = (obj) => store.dispatch(obj)

    dispatch(toggleLoading(true))


    /* Adds the result to the global state */
    const addToGlobalState = (data) => {
        /* Add to the state */
        dispatch(addTotalResults(data.total_results))


        if (mode === ADD_MOVIES) dispatch(addMovies(data.results))
        else if (mode === APPEND_MOVIES) dispatch(appendMovies(data.results))
        dispatch(toggleLoading(false))
    }


    /* Genre search */
    /* checks if the search string is present on the genre array */
    const genres = store.getState().genres;
    let isGenre = genres.find(genre => genre.name === searchQuery || genre.name.toLocaleLowerCase() === searchQuery)

    if (isGenre !== undefined) {
        /* then gets all movies with that genre */
        discoverMovieByGenre(isGenre.id, page).then(res => {

            addToGlobalState(res.data)

        })
    } else if (searchQuery.length === 4 && searchQuery.match(/(\d+)/) !== undefined) {

        /* Search by year */
        discoverMovieByYear(searchQuery, page).then(res => {

            addToGlobalState(res.data)

        })
    } else {
        /* Search by name */
        searchMovieByName(searchQuery, page).then(res => {

            addToGlobalState(res.data)
        })

    }

}


export default Search