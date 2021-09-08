import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Menu from "../menu/Menu";

import "./Header.css"

function Header(props){

    const [search, setSearch] = useState("");

    function buscar(e){
        e.preventDefault()
        props.history.push("/busca?query=" + search)
    }

    return(
        <div className="Header">
            <div className="Logo">
            <a href="/lancamentos">InfoPlay</a>
            </div>
            
            <Menu/>
            <form onSubmit={ buscar }>
                <input 
                    type="text" 
                    name="query" 
                    id="query" 
                    onChange={ e => setSearch(e.target.value) }
                />
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}

export default withRouter(Header)

