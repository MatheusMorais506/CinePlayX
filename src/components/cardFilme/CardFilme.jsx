import React from "react";

import "./CardFilme.css";
import { NavLink } from "react-router-dom";

export default function CadFilme({ filme }) {
  const nota = filme.vote_average.toFixed(1);
  const imgUrl = "https://image.tmdb.org/t/p/w200/";
  const data = new Date(filme.first_air_date);
  const data_lancamento = data.toLocaleDateString();

  return (
    <div className="CardFerie">
      <span className="material-icons FavButton">add_circle_outline</span>
      <div
        className="img-header"
        style={{ backgroundImage: `url(${imgUrl}${filme.poster_path})` }}
      ></div>

      <div className="detail">
        <div className="score">
          <span className="material-icons">grade</span>
          {nota}
        </div>
        <h2>{filme.name}</h2>
        <h3>{data_lancamento}</h3>
      </div>

      <NavLink to={`/filme/${filme.id}`} className="btn-detail">
        <span className="material-icons">add_circle</span>
        detalhes
      </NavLink>
    </div>
  );
}
