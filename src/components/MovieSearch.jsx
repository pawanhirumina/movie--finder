import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
  11;
  return (
    <div>
      <div className="header">
        <div className="logo">
          <a href="https://movie-finder-bypw.netlify.app/" className="title">
            Movie Finder
          </a>
          <div className="github">
            <a
              href="https://github.com/pawanhirumina/movie-finder"
              className="github-btn"
              title="Open Project"
            >
              <img src="/github.svg" className="icon" alt="Github Logo" />
            </a>
            <a
              href="https://github.com/pawanhirumina/movie-finder"
              className="github-btn"
              title="Star This Project"
            >
              <img src="/star.svg" className="icon" alt="Github Logo" />
            </a>
          </div>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{  width: "250px" }}
          />
          <button
            onClick={searchMovies}
            style={{  marginLeft: "10px" }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="movie-grid" style={{ marginTop: "20px" }}>
        {movies.map((movie, index) => (
          <div key={movie.imdbID} className="cards">
            <motion.div
              className="card"
              style={{ width: "100%" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // ✅ works here
            >
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
                <p>
                  <strong>Language: </strong>
                  {movie.Language}
                </p>
                {/* <p><strong>Plot: </strong>{movie.Plot}</p> */}
                <p>
                  <strong>Plot: </strong>
                  {movie.Plot.length > 150
                    ? movie.Plot.slice(0, 150) + "..."
                    : movie.Plot}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
        {movies.length === 0 && query && <p>No movies found.</p>}
      </div>
    </div>
  );
}

export default MovieSearch;
