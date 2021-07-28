import React, { Fragment } from 'react'

import "./style.css"
import Menu from '../../components/menu/Menu';

export default function Sobre() {
    return (
        <Fragment>
            <Menu />
            <div className="content">
                <h1 className="title">Info de Séries e Filmes</h1>
                <p className="description">Buscar informações de séries e filmes, verificar mais populares, lançamentos, notas e adicionar favoritos.<br/>
                                            API themoviedb.</p>
            </div>
        </Fragment>
    );
}