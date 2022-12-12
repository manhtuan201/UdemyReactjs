import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log("isLoading", isLoading);
  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://connnect-dtb-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    console.log(data);
    console.log(movie);
  }
  async function fetchMoviewsHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://connnect-dtb-default-rtdb.firebaseio.com/movies.json");
      const data = await response.json();
      console.log("data",data);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const loadMovies = []
      for(const key in data){
        loadMovies.push({
          id:key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        })
      }

      // const transformedMovies = data.results.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });
      setMovies(loadMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }
  return (
    <>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviewsHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </>
  );
}
export default App;
