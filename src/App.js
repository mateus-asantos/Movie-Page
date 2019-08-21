import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './styles/App.css';
import SearchField from './components/Search/SearchField';
import { getGenreList } from './utils/requests';
import { addGenres, displayInternalPage } from './actions';
import MovieCard from './components/Movies/MovieCard';
import MovieList from './components/Movies/MovieList';
import MovieInternalPage from './components/Movies/MovieInternalPage';


const mapDispatchToProps = (dispatch) => ({
	addGenres: (genres) => dispatch(addGenres(genres))
})
const mapStateToProps = (state) => ({
	loading: state.loading,
	displayInternalPage: state.displayInternalPage
})
const ConnectedApp = (props) => {

	/* get the genre list and dispatch it */
	useEffect(() => {
		getGenreList().then(res => {
			props.addGenres(res.data.genres)
		})
	}, [])

	const searchPage = (
		<React.Fragment>
			<SearchField />
			{props.loading ? "Loading..." : <MovieList />}
		</React.Fragment>
	)

	const internalPage = (
		<MovieInternalPage />
	)

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">Movies</h1>
			</header>
			<main className="App-main">
				{props.displayInternalPage?internalPage:searchPage}
			</main>
		</div>
	);
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp)

export default App;
