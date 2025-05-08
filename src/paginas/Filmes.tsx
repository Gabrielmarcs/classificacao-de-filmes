import { useEffect, useState } from 'react';
import api from '../servicos/api';
import { Link } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

function Filmes() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    api.get('movie/popular?language=pt-BR&page=1')
    .then(response => {
      console.log(response.data.results);  // Verifique os dados aqui
      setMovies(response.data.results);
    })
    .catch(error => console.error(error));
  }, []);

  return (
    <div className="row">
      {movies.map(movie => (
        <div className="col-6 col-md-4 col-lg-3 mb-4" key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="img-fluid rounded"
              alt={movie.title}
            />
            <p className="mt-2 text-center">{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Filmes;
