import React from 'react';
import { connect } from 'react-redux';
import { setInternalPageMovieID, displayInternalPage } from '../../actions';

const mapStateToProps = (state) => ({
    genres: state.genres
})

const mapDispatchToProps = (dispatch) =>({
    setInternalPageMovieID:(movieID) => dispatch(setInternalPageMovieID(movieID)),
    displayInternalPage:(value) => dispatch(displayInternalPage(value))
})


const ConnectedMovieCard = (props) => {

    const date = new Date(props.movie.release_date);
    let overview = props.movie.overview;
    let endstring = false;

    if (overview.length > 930) {
        overview = overview.slice(0, (overview.length - 921) * -1);
        endstring = true;
    }
    
    const handleClick = () =>{
        props.setInternalPageMovieID(props.movie.id)
        props.displayInternalPage(true)
    }
    
    return (
        <section className="Filme-card">
            
                <img className="Filme-poster" src={props.movie.poster_path ? "https://image.tmdb.org/t/p/w342" + props.movie.poster_path : ""} />
                <div className="Filme-info">
                    <div className="Filme-header">
                        <h3 className="Filme-nome" onClick={handleClick}>{props.movie.title}</h3>
                        <div className="Filme-score-badge"><p className="Filme-score">{props.movie.vote_average * 10}%</p></div>
                        <p className="Filme-lancamento">{
                            date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()
                        }</p>
                    </div>
                    <p className="Filme-sinopse">{overview}{endstring ? <a><strong>Leia Mais</strong></a> : ""}</p>
                    <ul className="Filme-lista-generos">
                        {props.movie.genre_ids.map(genre => (
                            <li className="Filme-genero">{props.genres.find(item => item.id === genre).name}</li>
                        ))}
                    </ul>
                </div>
            
        </section>

        
    )
}

const MovieCard = connect(mapStateToProps, mapDispatchToProps)(ConnectedMovieCard);

export default MovieCard;