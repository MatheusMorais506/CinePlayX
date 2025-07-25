import React, { Fragment, useEffect, useState } from 'react'
import api, { api_options } from '../../services/api'
import CardSerie from "../../components/cardSerie/CardSerie"
import Menu from '../../components/menu/Menu';

export default function Filmes() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => { load() }, [] )

    async function load(){
        try{
            const respostaFilmes = await api.get("/movie/now_playing", api_options())
            setFilmes(respostaFilmes.data.results)
        }catch(erro){
        }
    }

    return (
        <Fragment>
            <Menu />
              <div className="content">
                {filmes.map( (filme) => <CardSerie key={filme.id} serie={filme} />)}
            </div>
        </Fragment>
    );

}