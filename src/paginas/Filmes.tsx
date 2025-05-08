import { useEffect, useState } from 'react';
import api from '../servicos/api';
import { Link } from 'react-router-dom';

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
      //exibir os 10 primeiros filmes
      const dezFilmes = resposta.data.results.slice(0, 10);
      setFilmes(dezFilmes);
    })
    .catch(error => console.error(error));
  }, []);

  return (
    <div className="lista">
      <h1 className="titulo">Filmes Mais Populares</h1>
      {filmes.map(filme => (
        <div className="coluna" key={filme.id}>
          <Link to={`/movie/${filme.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
              className="imagem-filme"
              alt={filme.title}
            />
            <h2 className="titulo">{filme.title}</h2>
            <p className="avaliacao">  {filme.vote_average}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Filmes;
