import React from "react";
import "../cardSerie/CardSerie.css";
import { NavLink } from "react-router-dom";

export default function CardFilme({filme}) {
  const nota = filme.vote_average.toFixed(1);
  const imgUrl = "https://image.tmdb.org/t/p/w400/";
  const data = filme.release_date

  return (
    <NavLink to={`/filme/${filme.id}`} className="btn-detail">
    <div className="CardSerie">
      {/* <span className="material-icons FavButton">add_circle_outline</span> */}
      <div
        className="img-header"
        style={{ backgroundImage: `url(${imgUrl}${filme.poster_path})` }}
      ></div>

      {/* <div className="detail">
        <div className="score">
          <span className="material-icons">grade</span>
          {nota}
        </div>
        <h3>{data}</h3>
      </div> */}

      {/* <NavLink to={`/filme/${filme.id}`} className="btn-detail">
        <span className="material-icons">add_circle</span>
        detalhes
      </NavLink> */}
    </div>
    </NavLink>

  );
}
