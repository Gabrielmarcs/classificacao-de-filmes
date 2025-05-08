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
      // verifica se a resposta no console
      console.log(resposta.data.results);
      // Atualiza o estado com os filmes recebidos
      // e armazena na variável filmes
      setFilmes(resposta.data.results);
    })
    .catch(error => console.error(error));
  }, []);

  return (
    <div className="lista"> 
      {filmes.map(filme => (
        <div className="coluna" key={filme.id}>
          <Link to={`/movie/${filme.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
              className="imagem-filme"
              alt={filme.title}
            />
            <p className="titulo">{filme.title}</p>
            <p className="avaliacao">  {filme.vote_average}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Filmes;
