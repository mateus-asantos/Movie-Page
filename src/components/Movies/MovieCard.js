import React from 'react';
import { connect } from 'react-redux';
import { setInternalPageMovieID, displayInternalPage } from '../../actions';

const mapStateToProps = (state) => ({
    genres: state.genres
})

/* The internal page will display if it has a movieId and if displayInternalPage is true */
const mapDispatchToProps = (dispatch) => ({
    setInternalPageMovieID: (movieID) => dispatch(setInternalPageMovieID(movieID)),
    displayInternalPage: (value) => dispatch(displayInternalPage(value))
})


const ConnectedMovieCard = (props) => {

    /* Date formating */
    const date = new Date(props.movie.release_date);

    /* Movie synopsis */
    let synopsis = props.movie.overview;

    /* "Leia mais" */
    let endstring = false;

    /* Check length and set endstring true, so we can return the card with the buttton */
    if (synopsis.length > 930) {
        synopsis = synopsis.slice(0, (synopsis.length - 921) * -1);
        endstring = true;
    }

    /* Click on the movie to show the internal page */
    const handleClick = () => {
        props.setInternalPageMovieID(props.movie.id)
        props.displayInternalPage(true)
    }
    return (
        <section className="Filme-card">

            {props.movie.poster_path ? <img className="Filme-poster" src={"https://image.tmdb.org/t/p/w342" + props.movie.poster_path} alt="Pôster do filme" /> : ""}
            <div className="Filme-info">
                <div className="Filme-header">
                    <h3 className="Filme-nome" onClick={handleClick}>{props.movie.title}</h3>
                    <div className="Filme-score-badge"><p className="Filme-score">{props.movie.vote_average * 10}%</p></div>
                    <p className="Filme-lancamento">{
                        date.getDay() === 0 ? date.getMonth() + "/" + date.getFullYear() : date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()
                    }</p>
                </div>
                <p className="Filme-sinopse">{synopsis}{endstring ? <strong>Leia Mais</strong> : ""}</p>
                <ul className="Filme-lista-generos">
                    {props.movie.genre_ids.map(genre => (
                        <li className="Filme-genero" key={genre + "_" + props.movie.id}>{props.genres.find(item => item.id === genre).name}</li>
                    ))}
                </ul>
            </div>

        </section>


    )
}

const MovieCard = connect(mapStateToProps, mapDispatchToProps)(ConnectedMovieCard);

export default MovieCard;