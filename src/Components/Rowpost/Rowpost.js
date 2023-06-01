import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {API_KEY, imageUrl } from '../../constants/constants'
import Youtube from 'react-youtube';


function Rowpost(props) {
  const [movieRow, setRow] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response) => {
      //console.log("row movie list is ",response.data.results)
      setRow(response.data.results) 
    }).catch(err => {
      alert("Network Error")
    })
  },[props.url])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleMovieTrailer = (id) => {
    //console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then(response => {
      if (response.data.results.length !== 0){
        setUrlId(response.data.results[0])
      }
      else{
        alert("No Trailer Found!")
      }
    })
  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters' key={props.id}>
          {movieRow.map((movie) => 
            <img key={movie.id} onClick={() => handleMovieTrailer(movie.id)}  className={props.isSmall ? 'smallPoster': 'poster'} src={`${imageUrl + movie.backdrop_path}`} alt="poster" />
          )}
            
        </div>
       {urlId && <Youtube opts={opts} videoId={urlId.key} /> } 
    </div>
  )
}

export default Rowpost