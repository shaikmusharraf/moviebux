import React, { useState, useEffect } from "react";
import "../styles.css";

export default function MovieCard({movie}) {

    const errorHandler = (e) => {
        e.target.src = "images/default.jpg";
    }

    const getRatingClass = (rating) => {
        if(rating >= 8) {
            return 'rating-good';
        }else if(rating >= 6 ) {
            return 'rating-ok';
        }else {
            return 'rating-bad';
        }
    }


  return (
    <div>
      <div key={movie.id} className="movie-card">
        <img src={`images/${movie.image}`} alt={movie.title} onError={errorHandler} />
        <div className="movie-card-info">
          <h3 className="movie-card-title">{movie.title}</h3>
          <h3 className="movie-card-genre">{movie.genre}</h3>
          <h3 className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</h3>
        </div>
      </div>
    </div>
  );
}
