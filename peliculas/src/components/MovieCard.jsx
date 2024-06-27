
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/movie/top_rated',
          params: { language: 'en-US', page: '1' },
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWI5MWMyODY2YjU0YWNjNmUyZTlhNDdjN2U2ZWVhNyIsIm5iZiI6MTcxOTQ1MjEzMi40NDM0MDksInN1YiI6IjY2N2NiZjM4YTc5MjI5YWY3YjU5MTFjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.73Iocqy7LP64hD9Cz7iyS9tWGSye8Tj8Ftg-7cPTkZo'
          }
        };

        const response = await axios.request(options);
        setMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error('Error fetching data from TMDB', error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  

  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img 
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
            alt={movie.title} 
            className="movie-poster" 
          />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average}</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopRatedMovies;