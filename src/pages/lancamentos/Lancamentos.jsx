import React, { Fragment, useEffect, useState } from 'react'
import api, {api_options} from '../../services/api'

import CardLatest from "../../components/cardSerie/CardLatest"

import Menu from '../../components/menu/Menu';

export default function Lancamentos() {

    const [series, setSeries] = useState([])
 
    useEffect(() => { load() }, [] )

    async function load(){
        try{
            const resposta = await api.get("/tv/latest", api_options())
            setSeries(resposta.data.object)
            console.log(resposta.data.object)

        }catch(erro){
            console.log(erro)
        }
    }

    return (
        <Fragment>
            <Menu />
            <div className="content">
                {series.map( (serie) => <CardLatest key={serie.id} serie={serie} />)}
            </div>
        </Fragment>
    );

}