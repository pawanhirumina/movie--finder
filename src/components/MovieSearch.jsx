import React, { useState, useEffect } from "react";


// const API_KEY = "8c996723";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  // 🔁 Fetch movies by title, full details
  const fetchMovies = async (title) => {
    const res = await fetch(
      `https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`
    );
    const data = await res.json();

    if (!data.Search) {
      setMovies([]);
      return;
    }

    const detailedResults = await Promise.all(
      data.Search.map(async (movie) => {
        const res = await fetch(
          `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}&plot=short`
        );
        return res.json();
      })
    );

    setMovies(detailedResults);
  };

  // 🔁 Load default movies when page loads
  useEffect(() => {
    fetchMovies("Avengers");
  }, []);

  // 🔍 Search when user clicks button
  const searchMovies = () => {
    if (query.trim() === "") return;
    fetchMovies(query);
  };

  return (
    <div>
      <div className="header">
        <a href="#">Movie Finder</a>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ padding: "10px", width: "250px" }}
          />
          <button
            onClick={searchMovies}
            style={{ padding: "10px", marginLeft: "10px" }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="movie-grid" style={{ marginTop: "20px" }}>
        {movies.map((movie) => (
          <div key={movie.imdbID} className="cards">
            <div className="card" style={{ width: "100%" }}>
              <div className="img">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="card-img-top"
                loading="lazy"
              />
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  <strong>{movie.Title}</strong> ({movie.Year})
                </h3>
                <p><strong>Language : </strong>{movie.Language}</p>
                <p><strong>Plot : </strong>{movie.Plot}</p>
              </div>
            </div>
          </div>
        ))}
        {movies.length === 0 && query && <p>No movies found.</p>}
      </div>
    </div>
  );
}

export default MovieSearch;
