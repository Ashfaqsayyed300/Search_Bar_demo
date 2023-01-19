import { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';
import Navbar from './components/Navbar';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] =useState(true)

  useEffect(()=>{
    const fetchMovieHandler= async() =>{
      const response= await fetch('https://api.themoviedb.org/3/movie/popular?api_key=91d8dec71c20a0a8c5af1b548657d906&language=en-US&page=1')
      const responseData = await response.json();
      setMovies(responseData.results);
      setIsloading(false)
      // console.log(responseData.results);

    }
    fetchMovieHandler();
  },[])

  const getMoviesHandler = (movie)=>{
    console.log(movie);
    setMovies(movie)
  }

  return (
    <div>
      <Navbar filtered={getMoviesHandler} />
    <div className="movie-container">
      {isLoading ? <h1>Loading...</h1> : movies.map(movie => (
        <Movie
        key= {movie.id}
        title={movie.title}
        poster_path= {movie.poster_path}
        overview= {movie.overview}
        rating= {movie.vote_average}
        />
      ))}
    </div>
    </div>
  );
}

export default App;
