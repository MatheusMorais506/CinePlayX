import React from "react";

import "./CardSerie.css";
import { NavLink } from "react-router-dom";

export default function CardTrending({trending}) {
  const nota = trending.vote_average.toFixed(1);
  const imgUrl = "https://image.tmdb.org/t/p/w200/";
  
  const data = trending.release_date

  return (
    <div className="CardSerie">
      <span className="material-icons FavButton">add_circle_outline</span>
      <div
        className="img-header"
        style={{ backgroundImage: `url(${imgUrl}${trending.poster_path})` }}
      ></div>

      <div className="detail">
        <div className="score">
          <span className="material-icons">grade</span>
          {nota}
        </div>
        <h3>{data}</h3>
      </div>

      <NavLink to={`/serie/${trending.id}`} className="btn-detail">
        <span className="material-icons">add_circle</span>
        detalhes
      </NavLink>
    </div>
  );
}