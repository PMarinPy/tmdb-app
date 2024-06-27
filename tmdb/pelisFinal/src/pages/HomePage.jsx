
// import TopRatedMovies from '../components/MovieCard.jsx';
// import ActorPopular from '../components/ActorCard.jsx';
// import TopSeriesTV from '../components/SeriesCard.jsx';
import '../style-sheet/HomePage.css';
import SearchComponent from '../components/FilterResults';

function HomePage() {
    return (
        <div className="container">
        <header>
           <div className="logo"></div>
           
            <input type="text" placeholder="buscar.." />
            
            <p>iniciar sesion</p>
            <p>ES</p>
        </header>
  


        <h1 className="top-pelis">TOP PELICULAS</h1>  
        <div className="peliculas">
          <div className="imagen1">
            <div className="detalles1"></div>
          </div>
          <div className="imagen2"><div className="detalles2"></div>
          </div>
          <div className="imagen3"></div>
          <div className="imagen4"></div>   
             </div>  


             <h1 className="top-series">TOP SERIES</h1>  
             <div className="series">
            <div className="imagen1"></div>
            <div className="imagen2"></div>
            <div className="imagen3"></div>
            <div className="imagen4"></div>   
            </div>


            <h1 className="top-actores">TOP ACTORES</h1>  
             <div className="actores">
            <div className="imagen5"></div>
            <div className="imagen6"></div>
            <div className="imagen7"></div>
            <div className="imagen8"></div>   
            </div>


    </div>
    );
}
  
export default HomePage;