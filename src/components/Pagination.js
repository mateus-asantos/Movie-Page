import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { changePages } from '../actions/index'

const mapStateToProps = (state) => ({
    movies: state.movies,
    currentPage: state.currentPage,
    moviePerPage: state.moviesPerPage,
    requestPage: state.requestPage,
    searchQuery: state.searchQuery,
    totalResults: state.totalResults
})

const mapDispatchToProps = (dispatch) => ({
    changePages: (page) => dispatch(changePages(page)),
})

const ConnectedPagination = (props) => {
    const [PageNumbers, setPageNumbers] = useState([])

    useEffect(() => {

        let pageArray = []
        let pageNumber = 0

        props.currentPage === 1 ? pageNumber = props.currentPage : pageNumber = props.currentPage - 1

        let maxPages = Math.ceil(props.totalResults / props.moviePerPage);

        for (let i = 0; i < props.moviePerPage; i++) {
            pageArray.push(pageNumber);
            if (pageNumber < maxPages) {
                pageNumber++;
            } else {
                break;
            }
        }
        setPageNumbers(pageArray)

    }, [props.currentPage, props.moviePerPage, props.totalResults])


    const handleClick = (value) => {
        props.changePages(value.target.value)
        window.scrollTo(0, 0)
    }

    return (
        <React.Fragment>
            <ul className="Paginacao">
                {PageNumbers.map(item => {
                    if (props.currentPage !== item) {
                        return (
                            <li
                                className={"Paginacao-item"}
                                value={item}
                                onClick={handleClick}
                                key={item}>{item}
                            </li>)

                    } else {
                        return (
                            <li
                                className={"Paginacao-item Paginacao-item-selecionado"}
                                value={item}
                                onClick={handleClick}
                                key={item}>
                                <div className="Selecionado">
                                    {item}
                                </div>
                            </li>
                        )
                    }
                })}
            </ul>
        </React.Fragment>
    )
}

const Pagination = connect(mapStateToProps, mapDispatchToProps)(ConnectedPagination)

export default Pagination;