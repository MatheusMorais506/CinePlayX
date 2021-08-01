import React from 'react'
import './CardTemporada.css'
import deafultImgUrl from "./default_poster.png"


export default function CardTemporada({ tempFilmes }){
    return(
        <div class="card-temporada">
            <img 
                src={`https://image.tmdb.org/t/p/w200/${tempFilmes.poster_path}`} 
                onError={(e)=>{e.target.onerror = null; e.target.src=deafultImgUrl}}
                alt="poster temporada"
            />
            <div class="temporada-info">
                <h3>{ tempFilmes.name }</h3>
                <p className="qtde-eps">{ tempFilmes.episode_count} episódios</p>
                <p>{ tempFilmes.overview }</p>
            </div>
        </div>
    )
}