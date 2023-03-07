const movieSample = {
  adult: false,
  backdrop_path: "./images/movies/godfather_backdrop.jpg",
  genre_ids: [18, 80],
  id: 238,
  original_language: "en",
  original_title: "The Godfather",
  overview:
    "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
  popularity: 101.713,
  poster_path: "./images/238.jpg",
  release_date: "1972-03-14",
  title: "The Godfather",
  video: false,
  vote_average: 8.7,
  vote_count: 17555,
};

const Movie = () => {
  const {
    id,
    poster_path,
    title,
    overview,
    genre_ids,
    release_date,
    vote_average,
    popularity,
  } = movieSample;

  const checkGenre = (generosArr) => {
    console.log(generosArr);
    const generos = generosArr.map((generoNum) => {
      switch (generoNum) {
        case 18:
          return "drama";
          break;
        case 80:
          return "crime";
          break;
        default:
          return generoNum;
      }
    });
    return generos;
  };

  const genresArr = checkGenre(genre_ids);

  return (
    <article className="movie-item">
      <img src={poster_path} alt={title} />
      <div className="movie-info">
        <div className="movie-header">
          <h4>{title}</h4>
        </div>
        <div className="movie-main">
          <p>
            <span className="movie-category">{genresArr.join(' ')}</span>
            {console.log(checkGenre(genre_ids))}
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
