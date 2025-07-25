import React, { Fragment, useEffect, useState } from 'react'
import api, { api_options } from '../../services/api'
import CardSerie from "../../components/cardSerie/CardSerie"
import Menu from '../../components/menu/Menu';

export default function Series() {

    const [series, setSeries] = useState([])

    useEffect(() => { load() }, [] )

    async function load(){
        try{
            const resposta = await api.get("/tv/on_the_air", api_options())
            setSeries(resposta.data.results)
        }catch(erro){
        }
    }

    return (
        <Fragment>
            <Menu />
            <div className="content">
                {series.map( (serie) => <CardSerie key={serie.id} serie={serie} />)}
            </div>
        </Fragment>
    );

}