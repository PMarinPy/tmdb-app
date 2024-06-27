import { useState } from 'react';
import axios from 'axios';

const SearchComponent = () => {
  const [type, setType] = useState('movie');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    const params = new URLSearchParams({
      api_key: 'b5b91c2866b54acc6e2e9a47c7e6eea7',
      query: query,
    });

    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/${type}?${params.toString()}`);
      console.log(response.data.results)
      setResults(response.data.results);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="movie">Movie</option>
          <option value="tv">TV Show</option>
          <option value="person">Person</option>
        </select>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search..." 
        />
        <button type="submit">Search</button>
      </form>
      
      <ul>
        {results.map((result) => (
          <li key={result.id} > {result.name || result.title} </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
