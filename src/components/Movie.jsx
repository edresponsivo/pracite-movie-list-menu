import { checkGenre } from "../utils";

const Movie = ({ movie }) => {
  const {
    id,
    poster_path,
    title,
    overview,
    genre_ids,
    release_date,
    vote_average,
    popularity,
  } = movie;

  const genresArr = checkGenre(genre_ids);

  return (
    <article className="movie-item">
      <img src={poster_path} alt={title} className="photo" />
      <div className="movie-info">
        <div className="movie-header">
          <h4>{title}</h4>
        </div>
        <div className="movie-main">
          <p>
            <span className="movie-category">{genresArr.join(" ")}</span>
            {/* {console.log(checkGenre(genre_ids))} */}
          </p>
          <p>Voting: {vote_average}/10</p>
          <p className="movie-overview">{overview}</p>
        </div>
        <div className="movie-footer">
          <div className="footer-header">
            <h4>Release Date</h4>
            <h4>Popularity</h4>
          </div>
          <div className="footer-data">
            <p>{release_date}</p>
            <p>{popularity}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
export default Movie;
