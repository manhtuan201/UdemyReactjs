import React from "react";
import AddMovie from "./AddMovie";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  return (
    <>
      <AddMovie />
      <ul className={classes["movies-list"]}>
        {props.movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
          />
        ))}
      </ul>
    </>
  );
};

export default MovieList;
