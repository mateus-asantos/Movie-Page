import React, {useState, useEffect} from 'react'
import { getMovieVideos } from '../../utils/requests';

const MovieVideos = (movieID) =>{
    const [MovieVideo, setMovieVideo] = useState()
    useEffect(() => {
        console.log(movieID.movieID)
        getMovieVideos(movieID.movieID).then(((res)=>{
            console.log(res)
            if(res.data.results.length > 0){
                setMovieVideo("https://www.youtube.com/embed/"+res.data.results[0].key)
            }
        }))
    },[movieID.movieID])
    
    /* console.log(MovieVideo[0]?MovieVideo[0].key:"") */
    if(MovieVideo){
        return(
            <iframe className="Filme-video" width="100%" height="664" src={MovieVideo} title="Trailer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        )
    }else{
        return null
    }
}

export default MovieVideos