
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActorPopular = () => {
  const [Actor, setMovies] = useState([]);

  useEffect(() => {
    const getActorPopular = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/person/popular',
          params: {language: 'Es', page: '1'},
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

    getActorPopular();
  }, []);

  

  return (
    <div className="actor-container">
      {Actor.map((actor) => (
        <div key={actor.id} className="actor-card">
          <img 
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} 
            alt={actor.profile_path} 
            className="actor-poster" 
          />
          <div className="actor-info">
            <h3>{actor.name}</h3>
            <p>Popularity: {actor.popularity}</p>
            <p>Know for: {actor.known_for[0].title} </p>
            <p>{actor.known_for[0].overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActorPopular;