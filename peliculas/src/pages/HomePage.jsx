
import TopRatedMovies from '../components/MovieCard.jsx';
import ActorPopular from '../components/ActorCard.jsx';
import TopSeriesTV from '../components/SeriesCard.jsx';

function Home() {
    return (
      <div className="App">
        <h1>Top Rated Movies</h1>
        <TopRatedMovies />
        <ActorPopular />
        <TopSeriesTV />
      </div>
    );
  }
  
  export default Home;