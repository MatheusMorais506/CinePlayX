import React, { Fragment, useEffect, useState } from 'react'
import api, {api_options} from '../../services/api'

import CardSerie from "../../components/cardSerie/CardSerie"
import CardFilme from "../../components/cardFilme/CardFilme"

import Menu from '../../components/menu/Menu';

export default function Lancamentos() {

    const [series, setSeries] = useState([])
    const [filmes, setFilmes] = useState([])
 
    useEffect(() => { load() }, [] )

    async function load(){
        try{
            const resposta = await api.get("/tv/airing_today", api_options())
            setSeries(resposta.data.results)
            console.log(resposta.data.results)

           /* const resposta2 = await api.get("/movie/latest", api_options())
            setFilmes(resposta2.data.results)
            console.log(resposta2.data.results)*/

        }catch(erro){
            console.log(erro)
        }
    }

    return (
        <Fragment>
            <Menu />
            <div className="content">
                {series.map( (serie) => <CardSerie key={serie.id} serie={serie} />)}
                {/*{filmes.map( (filme) => <CardFilme key={filme.id} filme={filme} />)}*/}
            </div>
        </Fragment>
    );

}