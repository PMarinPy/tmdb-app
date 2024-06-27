import axios from 'axios';
const TMDB_API_KEY = 'b5b91c2866b54acc6e2e9a47c7e6eea7';
import Auto from './AutocompleteList';

const getMoviesByName = async () => {
  let allResults = [];
  let currentPage = 1;
  let totalPages = 1;

  try {
    while (currentPage <= totalPages && allResults.length < 300) {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: TMDB_API_KEY,
          query: Auto,
          page: currentPage,
        },
      });

      if (response.data.results.length > 0) {
        allResults = [...allResults, ...response.data.results];
        totalPages = response.data.total_pages;
        currentPage++;
      } else {
        break;
      }
    }

    console.log('Películas encontradas:', allResults.slice(0, 300));
    return allResults.slice(0, 300); // Devolver las primeras 300 películas encontradas
  } catch (error) {
    console.error('Error al buscar las películas:', error);
    return [];
  }
};

export default getMoviesByName;
