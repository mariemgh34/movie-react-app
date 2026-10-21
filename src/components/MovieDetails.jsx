import React from 'react'
import { Link, useParams } from 'react-router-dom'
import "../App.css";
const MovieDetails = ({movies}) => {
const {title} = useParams()
const movie=movies.find(el=>el.title==title)


  return (
    <>
    <p className="movie-title">{movie.title}</p>
    <p className="movie-description"> {movie.description}</p>
    <iframe width="560" height="315" src={movie.Trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><br />
    <Link to="/"  className="home-button">🏠 Back to Home</Link>
    </>
  )
}

export default MovieDetails