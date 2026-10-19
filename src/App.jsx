
import { useState } from "react";
import MovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import "./App.css";
import AddMovies from "./components/AddMovies";


const App = () => {
  const initialMovies = [
    {
  id : 1,
  posterURL: "/tdwp.jpg",
  title : "The devil wears Prada",
  description : "The Devil Wears Prada follows Andy, a young journalist working for a demanding fashion magazine editor.",
  rating: 8.8,

},
{
    id: 2,
    posterURL: "Interstellar.jpg",
    title: "Interstellar",
    description: "Astronauts travel through space to find a new home.",
    rating: 8.7,
  },
  {
    id: 3,
    posterURL: "inception.jpg",
    title: "Inception",
    description: "A thief enters people's dreams to steal secrets.",
    rating: 8.8,
  },
  {
    id: 4,
    posterURL: "tdk.jpg",
    title: "The dark knight",
    description: "Batman faces the Joker in Gotham City",
    rating: 9.0,
  },
  {
    id: 5,
    posterURL: "avatar.jpg",
    title: "Avatar",
    description: "Avatar follows a human soldier who joins the Na’vi on a beautiful alien planet called Pandora.",
    rating: 8.6,
  },


  ]
  const [movies, setMovies] = useState(initialMovies);
  const [filterMovies, setFilterMovies] = useState(movies);
   
  return (
    <div>
      <AddMovies movies={movies} setMovies={setMovies} setFilterMovies={setFilterMovies}/>
      <Filter filterMovies={filterMovies} setFilterMovies={setFilterMovies} movies={movies} />
      <MovieList movies={filterMovies} />
      
    </div>
  )
}

export default App