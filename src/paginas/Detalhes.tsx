import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../servicos/api';

interface FilmeDetalhado {
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
  }

function formatarData(data: string){
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
}

function Detalhes() {
    const {id} = useParams();
    const [filme, setFilme] = useState<FilmeDetalhado | null>(null);
    
    useEffect(() => {
        api.get(`movie/${id}?language=pt-BR`)
            .then(resposta => setFilme(resposta.data))
            .catch(error => console.error(error));
    }, [id]);

    if (!filme) return <p>Carregando...</p>;
    
    return (
        <div className="detalhes">
            <h1 className="titulo">{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.title} className="imagem" />
            
            <p><strong>Lançamento:</strong> {formatarData(filme.release_date)}</p>
            <p><strong>Avaliação:</strong> {filme.vote_average}</p>
            <h2>Sinopse</h2>
            <p>{filme.overview}</p>
        </div>
  );
}
export default Detalhes;