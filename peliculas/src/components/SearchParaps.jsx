import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const type = 'tv'

  // Función para manejar la búsqueda
  const handleSearch = async (searchQuery) => {
    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }

    const apiUrl = `https://api.themoviedb.org/3/search/${type}`;
    const apiKey = 'b5b91c2866b54acc6e2e9a47c7e6eea7';

    const params = new URLSearchParams({
      api_key: apiKey,
      language: 'en-US',
      query: searchQuery,
      include_adult: false,
      page: 1,
    });

    try {
      const response = await axios.get(`${apiUrl}?${params.toString()}`);
      setResults(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error('Error fetching data from TMDB', error);
    }
  };

  // Debouncing la función de búsqueda para optimizar las solicitudes a la API
  const debouncedSearch = useCallback(
    debounce((searchQuery) => {
      handleSearch(searchQuery);
    }, 100),
    []
  );

  useEffect(() => {
    debouncedSearch(query);
    return () => {
      debouncedSearch.cancel();
    };
  }, [query, debouncedSearch]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies, TV shows or people"
        />
      </div>
      <div>
        {results.length > 0 && (
          <ul>
            {results.map((result) => (
              <li key={result.id}>
                <h3>{result.name || result.title}</h3>
                <p>{result.overview || result.known_for_department}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
