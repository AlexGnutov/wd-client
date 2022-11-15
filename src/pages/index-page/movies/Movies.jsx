import React from 'react';
import { useSelector } from 'react-redux';
import MovieInfo from './movie-info/MovieInfo';
import MovieSeances from './movie-seances/MovieSeances';

function Movies() {
  const { films, seances } = useSelector((state) => state.app);

  const filmsWithSeances = [];
  films.forEach((film) => {
    if (seances.some((seance) => +seance.filmId === +film.id)) {
      filmsWithSeances.push(film);
    }
  });

  return (
    <>
      {filmsWithSeances.map((film) => (
        <section key={film.id} className="movie">
          <MovieInfo film={film} />
          <MovieSeances film={film} />
        </section>
      ))}
    </>
  );
}

export default Movies;
