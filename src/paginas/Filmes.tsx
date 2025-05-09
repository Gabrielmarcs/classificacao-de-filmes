import { useEffect, useState } from 'react';
import api from '../servicos/api';
import { Link } from 'react-router-dom';
import '../estilos/filmes.scss';

interface Filme {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

function Filmes() {
  const [filmes, setFilmes] = useState<Filme[]>([]);

  useEffect(() => {
    // Fazendo a requisição para a API
    // e armazenando os filmes no estado
    api.get('movie/popular?language=pt-BR&page=1')
    .then(resposta => {
      const filmes = resposta.data.results;
      setFilmes(filmes);
    })
    .catch(error => console.error(error));
  }, []);

  return (
    <div className="lista">
      <h1 className="titulo-pagina">Filmes Mais Populares</h1>
      <div className='grade'>
        {filmes.length === 0 ? (
          <p>Carregando filmes...</p>
        ) : (
        filmes.map(filme => (
          <div className="card" key={filme.id}>
            <Link to={`/movie/${filme.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                className="imagem-filme"
                alt={filme.title}
              />
              <h2 className="titulo-filme">{filme.title}</h2>
              <p className="avaliacao">⭐{filme.vote_average.toFixed(1)}</p>
            </Link>
          </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Filmes;
