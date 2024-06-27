import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopSeriesTV = () => {
  const [seriesTV, setMovies] = useState([]);

  useEffect(() => {
    const SeriesAndTV = async () => {
      try {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/tv/popular',
            params: {language: 'en-US', page: '1'},
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

    SeriesAndTV();
  }, []);

  

  return (
    <div className="series-container">
      {seriesTV.map((serie) => (
        <div key={serie.id} className="serie-card">
          <img 
            src={`https://image.tmdb.org/t/p/w200${serie.backdrop_path}`} 
            alt={serie.original_name} 
            className="serie-poster" 
          />
          <div className="serie-info">
            <h3>{serie.original_name}</h3>
            <p>Vote_count: {serie.vote_count}</p>
            <p>{serie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopSeriesTV;