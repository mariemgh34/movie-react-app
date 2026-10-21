
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => <Link to={`/movies/${encodeURIComponent(movie.title)}`} key={movie.id}>
      <MovieCard title={movie.title}
      description={movie.description}
      posterURL={movie.posterURL}
      rating={movie.rating}
      />
      </Link>)}
    </div>
  );
};

export default MovieList;
