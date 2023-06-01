import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constants'


function Rowpost() {
  const [movieRow, setRow] = useState([])

  useEffect(() => {
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response) => {
      //console.log("row movie list is ",response.data.results)
      setRow(response.data.results) 
    }).catch(err => {
      alert("Network Error")
    })
  },[])

  return (
    <div className='row'>
        <h2>Netflix Originals</h2>
        <div className='posters'>
          {movieRow.map((movie) => 
            <img className='poster' src={`${imageUrl + movie.backdrop_path}`} alt="poster" />
          )}
            
        </div>
    </div>
  )
}

export default Rowpost