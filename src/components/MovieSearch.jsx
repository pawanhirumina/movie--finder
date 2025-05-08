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
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                id="github"
              >
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="icn"
                    transform="translate(-140.000000, -7559.000000)"
                    fill="#fff"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                        id="github-[#142]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="https://github.com/pawanhirumina/movie-finder"
              className="github-btn"
              title="Star This Project"
            >
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="star"
              >
                <path
                  d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                  stroke="#fff"
                  id="icn"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ width: "250px" }}
          />
          <button onClick={searchMovies} style={{ marginLeft: "10px" }}>
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
