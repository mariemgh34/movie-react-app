import React, { useRef } from 'react'


const Filter = ({Filter,setFilterMovies,movies}) => {
  const title=useRef()
  function FilterMovies(event) {
    event.preventDefault()
    setFilterMovies(movies.filter(movie => movie.title.toLowerCase().includes(title.current.value.toLowerCase().trim())))
    console.log("hello")
  }
  return (
    <div>
      <fieldset>
      <form onSubmit={FilterMovies}>
      <input type="text" placeholder='Filter a movie....' ref={title} /><br />
      <button type='submit'>Filter the movies</button>
      </form>
      </fieldset>
      </div>
  )
}

export default Filter