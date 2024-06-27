import axios from 'axios';
import { auto } from './components/AutocompleteList.jsx';
//import Home from './pages/HomePage.jsx'
import SearchComponent from './components/SearchParaps.jsx';

const TMDB_API_KEY = 'b5b91c2866b54acc6e2e9a47c7e6eea7';

// Función para obtener el ID del actor Bruce Willis
const getActorId = async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/search/person', {
      params: {
        api_key: TMDB_API_KEY,
        query: auto,
      },
    });

    // Verificar si se encontró algún resultado
    if (response.data.results.length > 0) {
      // Tomar el primer resultado (suponiendo que sea el correcto)
      const actorId = response.data.results[0].id;
      return actorId;
    } else {
      console.log('No se encontró ningún resultado para el actor');
      return null;
    }
  } catch (error) {
    console.error('Error al buscar el ID del actor:', error);
    return null;
  }
};

// Función para obtener las películas de Bruce Willis por su ID
const getMoviesByActor = async () => {
  try {
    // Obtener el ID de Bruce Willis
    const actorId = await getActorId();

    if (actorId) {
      // Hacer la solicitud para obtener las películas del actor
      const response = await axios.get(`https://api.themoviedb.org/3/person/${actorId}/movie_credits`, {
        params: {
          api_key: TMDB_API_KEY,
        },
      });

      console.log('Películas del actor:', response.data.cast);
    } else {
      console.log('No se pudo obtener el ID del actor');
      return null;
    }
  } catch (error) {
    console.error('Error al obtener las películas del actor:', error);
    return null;
  }
};

const App = (() => {
  return(
    <SearchComponent></SearchComponent>
  )
});

export default App;


