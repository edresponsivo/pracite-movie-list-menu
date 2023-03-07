const GenresMenu = ({ genres, filterGenres }) => {
  // console.log(genres);
  return (
    <div className="btn-container">
      {genres.map((genre) => (
        <button
          key={genre.id}
          type="button"
          className="filter-btn"
          onClick={() => filterGenres(genre.id)}
        >
          {genre.text}
        </button>
      ))}
    </div>
  );
};
export default GenresMenu;
