import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getMovie } from '../../data/requests';
import MovieVideos from './MovieVideo';
import { displayInternalPage } from '../../actions';
import { iso_639 } from '../../utils/iso_639'
import statusTranslation from '../../utils/status_translation';

const mapStateToProps = (state) => ({
    movieID: state.internalPageMovieId
})

/* Using this to set displayInternalPage to false and, with this, go back to the movie list */
const mapDispatchToProps = (dispatch) => ({
    displayInternalPage: () => dispatch(displayInternalPage(false))
})

const ConnectedMovieInternalPage = (props) => {
    const [MovieInfo, setMovieInfo] = useState({})

    let date = new Date(MovieInfo.release_date)

    useEffect(() => {
        /* Get information about the movie */
        getMovie(props.movieID).then((res => {
            /* iso conversion (language name) */
            let state = { ...res.data, original_language: iso_639.find((value) => value.iso_639_1 === res.data.original_language).nome_da_lingua }

            /* status translation */
            state = { ...state, status: statusTranslation(state.status) }
            setMovieInfo(state)
        }))
    }, [props.movieID])

    /* Click on back */
    const handleBack = () => {
        props.displayInternalPage(false)
    }

    return (
        <section className="Filme-detalhe">
            <div className="Filme-detalhe-voltar" onClick={handleBack}> Voltar</div>
            <div className="Filme-detalhe-header">
                <h3 className="Filme-detalhe-nome">{MovieInfo.title}</h3>
                <p className="Filme-detalhe-lancamento">{
                    date.getDay() === 0 ? date.getMonth() + "/" + date.getFullYear() : date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()
                }</p>
            </div>
            <div className="Filme-detalhe-content">
                <img className="Filme-detalhe-poster" src={MovieInfo.poster_path ? "https://image.tmdb.org/t/p/w342" + MovieInfo.poster_path : ""} alt="Pôster do filme" />
                <div className="Filme-detalhe-text">
                    <h3 className="Filme-detalhe-sinopse-titulo">Sinopse</h3>
                    <p className="Filme-detalhe-sinopse">{MovieInfo.overview}</p>

                    <h3 className="Filme-detalhe-informacao-titulo">Informações</h3>
                    <div className="Filme-detalhe-informacao">
                        <div className="Filme-detalhe-informacao-item" id="situação" >
                            <div className="Filme-detalhe-informacao-item-titulo">
                                Situação
                            </div>
                            <div className="Filme-detalhe-informacao-item-texto">
                                {MovieInfo.status}
                            </div>
                        </div>
                        <div className="Filme-detalhe-informacao-item" id="Idioma" >
                            <div className="Filme-detalhe-informacao-item-titulo">
                                Idioma
                            </div>
                            <div className="Filme-detalhe-informacao-item-texto">
                                {MovieInfo.original_language}
                            </div>
                        </div>
                        <div className="Filme-detalhe-informacao-item" id="Duração" >
                            <div className="Filme-detalhe-informacao-item-titulo">
                                Duração
                            </div>
                            <div className="Filme-detalhe-informacao-item-texto">
                                {Math.floor(MovieInfo.runtime / 60)}h{MovieInfo.runtime % 60}min
                            </div>
                        </div>
                        <div className="Filme-detalhe-informacao-item" id="Orçamento" >
                            <div className="Filme-detalhe-informacao-item-titulo">
                                Orçamento
                            </div>
                            <div className="Filme-detalhe-informacao-item-texto">
                                ${MovieInfo.budget ? (MovieInfo.budget).toFixed(2).replace(".", ",").replace(/\d(?=(\d{3})+,)/g, '$&.') : ""}
                            </div>
                        </div>
                        <div className="Filme-detalhe-informacao-item" id="Receita" >
                            <div className="Filme-detalhe-informacao-item-titulo">
                                Receita
                            </div>
                            <div className="Filme-detalhe-informacao-item-texto">
                                ${MovieInfo.revenue ? (MovieInfo.revenue).toFixed(2).replace(".", ",").replace(/\d(?=(\d{3})+,)/g, '$&.') : ""}
                            </div>
                        </div>
                        <div className="Filme-detalhe-informacao-item" id="Lucro" >
                            <div className="Filme-detalhe-informacao-item-titulo">
                                Lucro
                            </div>
                            <div className="Filme-detalhe-informacao-item-texto">
                                ${MovieInfo.revenue ? (MovieInfo.revenue - MovieInfo.budget).toFixed(2).replace(".", ",").replace(/\d(?=(\d{3})+,)/g, '$&.') : ""}
                            </div>
                        </div>
                    </div>
                    <ul className="Filme-lista-generos">
                        {MovieInfo.genres ? MovieInfo.genres.map(genre => (
                            <li className="Filme-genero" key={genre.name}>{genre.name}</li>
                        )) : ""}
                    </ul>
                    <div className="Filme-detalhe-score-badge">
                        <p className="Filme-score">{MovieInfo.vote_average * 10}%</p>
                    </div>
                </div>
            </div>
            <MovieVideos movieID={props.movieID} />

        </section>
    )

}

const MovieInternalPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedMovieInternalPage)

export default MovieInternalPage;