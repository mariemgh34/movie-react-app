import { Link } from "react-router-dom";

function MovieCard({title,posterURL,description,rating }) {
  return (
    <Link  to={`/movies/${encodeURIComponent(title)}`}>
    <div className="movie-card" >
      <img
        src={posterURL}
        alt={`${title} poster`}
      />

      <div className="movie-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <p> {rating}/10</p>
        
      </div>
    </div>
    </Link>
  );
}

export default MovieCard;

