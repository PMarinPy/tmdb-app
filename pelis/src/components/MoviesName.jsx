import axios from 'axios';
const TMDB_API_KEY = 'b5b91c2866b54acc6e2e9a47c7e6eea7';
import Auto from './AutocompleteList';
// Función para obtener las películas por nombre
const getMoviesByName = async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: TMDB_API_KEY,
        query: Auto,
      },
    });

    // Verificar si se encontró algún resultado
    if (response.data.results.length > 0) {
      console.log('Películas encontradas:', response.data.results);
      return response.data.results; // Devolver las películas encontradas
    } else {
      console.log('No se encontró ninguna película con ese nombre');
      return [];
    }
  } catch (error) {
    console.error('Error al buscar las películas:', error);
    return [];
  }
};

// Llamar a la función con el nombre de la película

//getMoviesByName(Auto);

export default getMoviesByName;
