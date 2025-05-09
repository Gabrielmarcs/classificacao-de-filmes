import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../servicos/api';
import '../estilos/detalhes.scss';

interface FilmeDetalhado {
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
}

function formatarData(data: string) {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
}

function Detalhes() {
    const { id } = useParams();
    const [filme, setFilme] = useState<FilmeDetalhado | null>(null);
    const [trailerKey, setTrailer] = useState<string | null>(null);
    useEffect(() => {
        api.get(`movie/${id}?language=pt-BR`)
            .then(resposta => setFilme(resposta.data))
            .catch(error => console.error(error));

            api.get(`movie/${id}/videos?language=pt-BR`)
            .then(res => {
              const videos = res.data.results;
              const trailer = videos.find((video: any) =>
                video.type === "Trailer" && video.site === "YouTube"
              );
              if (trailer) setTrailer(trailer.key);
            })
            .catch(error => console.error(error));
    }, [id]);

    if (!filme) return <p>Carregando...</p>;

    return (
        <div className="detalhes">
            <div className="conteudo">
                <div className="coluna-imagem">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                        alt={filme.title}
                        className="imagem"
                    />
                </div>
                <div className="coluna-info">
                    <h1 className="titulo">{filme.title}</h1>
                    <p><strong>Lançamento:</strong> {formatarData(filme.release_date)}</p>
                    <p><strong>Avaliação:</strong> {filme.vote_average.toFixed(1)}⭐</p>
                    <h2>Sinopse</h2>
                    <p>{filme.overview}</p>

                    {trailerKey && (
                        <div className="trailer">
                            <h2>Trailer</h2>
                            <iframe
                                width="100%"
                                height="400"
                                src={`https://www.youtube.com/embed/${trailerKey}`}
                                title="Trailer"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Detalhes;