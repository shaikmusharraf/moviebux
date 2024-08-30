import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleGenre = (e) => {
    setGenre(e.target.value);
  };
  const handleRating = (e) => {
    setRating(e.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return genre ==="All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();
  }

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  }

  const matchesRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;
      case "Good":
        return movie.rating >= 8;
      case "Ok":
        return movie.rating >= 5;
      case "Bad":
        return movie.rating < 5;
      default:
        return false;
    }
  }

  const filteredMovies = movies.filter(movie => 
  matchesGenre(movie, genre) && 
  matchesRating(movie,rating) &&
  matchesSearchTerm(movie, searchTerm) );

  return (
    <div>
        <input type="text" className="search-input" placeholder="Search a movie name..." value={searchTerm} onChange={handleSearch}/>
        
        <div className="filter-bar">
          <div  className="filter-slot">
              <label>Genre</label>
              <select className="filter-dropdown" value={genre} onChange={handleGenre}>
                  <option>All Genres</option>
                  <option>Action</option>
                  <option>Drama</option>
                  <option>Fantasy</option>
                  <option>Horror</option>
              </select>
          </div>
          <div  className="filter-slot">
              <label>Rating</label>
              <select className="filter-dropdown" value={rating} onChange={handleRating}>
                  <option>All</option>
                  <option>Good</option>
                  <option>Okay</option>
                  <option>Bad</option>
              </select>
          </div>
        </div>



      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>

    // <div>{movies.length}</div>
  );
}

//Add "React Developer Tools" as extension in your browser