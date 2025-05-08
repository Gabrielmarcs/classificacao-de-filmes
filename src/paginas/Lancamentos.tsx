// src/paginas/Lancamentos.tsx
import { useEffect, useState } from 'react';
import api from '../servicos/api';
import { Link } from 'react-router-dom';

interface Filme {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

function formatarData(data: string) {
  const [ano, mes, dia] = data.split('-');
  return `${dia}/${mes}/${ano}`;
}

function Lancamentos() {
  const [filmes, setFilmes] = useState<Filme[]>([]);

  useEffect(() => {
    const anoAtual = new Date().getFullYear();
    api.get('movie/upcoming?language=pt-BR&page=1')
    .then(resposta => {
      //exibir os filmes do ano atual
      const filmesDoAnoAtual = resposta.data.results.filter(
        (filme : Filme) => new Date(filme.release_date).getFullYear() === anoAtual
      );
      setFilmes(filmesDoAnoAtual);
    })
    .catch(error => console.error(error));
  }, []);

  return (
    <div className="lista">
      <h1 className="titulo">Lançamentos</h1>
      {filmes.map(filme => (
        <div className="coluna" key={filme.id}>
          <Link to={`/movie/${filme.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
              className="imagem-filme"
              alt={filme.title}
            />
            <p className="titulo">{filme.title}</p>
            <p className="data-lancamento">
              Estreia: {formatarData(filme.release_date)}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Lancamentos;
