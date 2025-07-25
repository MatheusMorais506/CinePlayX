import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Menu from "../menu/Menu";
import "./Header.css"

function Header(props){

    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    function buscar(e){
        e.preventDefault()
        props.history.push("/busca?query=" + search)
    }

    function handleSubmit(e) {
        buscar(e);      
        setShowSearch(false);
    }

    return(
           <>
        <div className="Header">
            <div className="Logo">
            <a href="/lancamentos" style={{ color: "#fff", marginLeft: "2rem" }}>CinePlayX</a>
            </div>
            
            <div className="Menu">
                <Menu/>
            </div>

            <div className="Search">
              <button
                    className="search-icon"
                    onClick={() => setShowSearch((prev) => !prev)}
                  >
                <span className="material-icons">search</span>
              </button>
            </div>
        </div>

        {showSearch && (
          <div className="SearchBar">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="query"
              id="query"
              placeholder="Pesquisar..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Buscar</button>
          </form>
        </div>
      )}
    </>
    )
}

export default withRouter(Header)

