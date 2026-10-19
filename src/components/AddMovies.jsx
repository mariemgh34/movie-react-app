import { useRef } from "react";

const AddMovies = ({movies , setMovies,setFilterMovies}) => {
    const posterURLRef = useRef();
    
    const titleRef = useRef();
    
    const descriptionRef = useRef();
    const ratingRef = useRef();
    function createnewmovie(event){
        event.preventDefault();
            const newMovie = {
        id: Date.now(),
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        posterURL: posterURLRef.current.value,
        rating: Number(ratingRef.current.value),
};

setMovies([...movies, newMovie]);
setFilterMovies([...movies, newMovie]);

    }

  return (
    <div className="add-Movies">
        <fieldset>
        <h2>Add a new Movie 🎀</h2>
        <form onSubmit={createnewmovie}>
        <input type="text" placeholder="Write a Movie tiltle" ref={titleRef}/><br />
        <textarea name="" id="" placeholder="Write a description" ref={descriptionRef}></textarea><br />
        <input type="text" placeholder=" Write Poster URL" ref={posterURLRef} /><br />
        <input type="number" placeholder="Write a rating" ref={ratingRef}/><br />
        <button type="submit">Add the movie 💗</button>
        </form>
        </fieldset>
    </div>
  )
}

export default AddMovies
