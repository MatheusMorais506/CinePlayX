import React, { Fragment, useEffect, useState } from "react";
import api, { api_options } from "../../services/api";
/*import CardTempFilmes from "../../components/cardTemporada/CardTempFilmes";*/
import "../serie/Serie.css";

export default function Populares(props) {
  const { filmeId } = props.match.params;
  const [filme, setSerie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [belongs_to_collection, setBelongsToCollection] = useState([]);
  const imgBaseUrl = "https://image.tmdb.org/t/p/w400/";
  const imgBgBaseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const resposta = await api.get(`/movie/${filmeId}`, api_options());
      setSerie(resposta.data);
      setGenres(resposta.data.genres);
      setBelongsToCollection(resposta.data.belongs_to_collection)
    } catch (erro) {
    }
  }

  return (
    <Fragment>
      <div className="hero">
        <div
          className="bg"
          style={{
            backgroundImage: `url(${imgBgBaseUrl}${filme.backdrop_path})`,
          }}/*imagem de background*/
        ></div>

        <button className="btn-back" onClick={props.history.goBack}>
          <span className="material-icons">navigate_before</span>
          
        </button>{/*Botão de 'Voltar'*/}

        <img src={`${imgBaseUrl}${filme.poster_path}`} alt="poster"/>/{/*Poster*/}

        <div className="serie-info">
          <h1>{filme.title}</h1>{/*TItulo*/}
          
          <div className="score">
            <span className="material-icons">grade</span>
            {filme.vote_average}{/*Nota*/}<br/>
            {filme.release_date}{/*Data*/}<br/>
            
          </div>

          <p className="genres">
            {genres.map((genero) => {
              return genero.name + " | ";
            })}
          </p>{/*Gênero*/}

          {filme.tagline}
          <h2>Sinopse</h2>
          <p>{filme.overview}</p>{/*Resumo*/}
        </div>      
      </div>

    </Fragment>
  );
}
