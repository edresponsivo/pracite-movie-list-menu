import { useState } from "react";
import Movies from "./components/Movies";
import GenresMenu from "./components/GenresMenu";
import movies_data from "./movies-data";
import { checkGenre, getGenreWID } from "./utils";

const getAllGenres = (moviesData) => {
  const partialGen = [...new Set(moviesData.map((movie) => movie.genre_ids))];
  const partialGenFlat = partialGen.flatMap((cat) => cat);
  return [{ id: 0, text: "all" }, ...new Set(partialGenFlat.map((cat) => cat))];
};
// console.log(getGenreWID(getAllGenres(movies_data)));

const App = () => {
  const [movies, setMovies] = useState(movies_data);
  const [genres, setGenres] = useState(getGenreWID(getAllGenres(movies_data)));
  // console.log('genres', genres);

  const filterGenres = (genId) => {
    console.log("filtering: ", genId);
    if (genId == 0) {
      setMovies(movies_data);
    } else {
      let newSetOfMovies = movies_data.filter((movie) =>
        movie.genre_ids.includes(genId)
      );

      setMovies(newSetOfMovies);
    }
  };

  return (
    <main>
      <section className="movies section">
        <section className="title">
          <h2>Movies List</h2>
          <div className="underline"></div>
          <p>To filter by movie genres click on the genre link</p>
        </section>
        <GenresMenu genres={genres} filterGenres={filterGenres} />
        <Movies movies={movies} />
      </section>
    </main>
  );
};
export default App;
