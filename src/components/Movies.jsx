import Movie from "./Movie";

const Movies = ({ movies }) => {
  // console.log(props.movies);
  return (
    <section className="section-center">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </section>
  );
};
export default Movies;
