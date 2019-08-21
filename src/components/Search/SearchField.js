import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import useDebounce from '../../utils/debouncer';
import search from './search';
import { changeSearchQuery,changePages } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
    changeSearchQuery: (searchQuery) => dispatch(changeSearchQuery(searchQuery)),
    changePages:(page) => dispatch(changePages(page))
})

const ConnectedSearchField = (props) => {
    const [searchInput, setSearchInput] = useState('')

    /* input debounce */
    const debouncedSearchInput = useDebounce(searchInput, 500);

    /* Waits 500ms after the user stops typing (useDebounce) */
    useEffect(() => {
        if (debouncedSearchInput) {
            search(debouncedSearchInput)
            props.changeSearchQuery(debouncedSearchInput)
            props.changePages(1)
        }
    }, [debouncedSearchInput])

    /* Returning the search input*/
    return (
        <input className='Search-input'
            type='text'
            placeholder='Busque um filme por nome, ano ou gênero...'
            onChange={e => setSearchInput(e.target.value)}
            value={searchInput} />
    )
}

const SearchField = connect(null, mapDispatchToProps)(ConnectedSearchField)

export default SearchField