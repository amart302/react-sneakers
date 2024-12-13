import React from "react";
import Header from "../../components/header/Header";

import "./favourites.css";

function Favourites(){

    return(
        <div className="content">
            <Header />
            <div className="favourites_block">
                <div style={{display: "flex", gap: "20px"}}>
                    <button>
                        <img src="./images/arrow.svg" alt="" />
                    </button>
                    <h1>Мои закладки</h1>
                </div>
            </div>
        </div>
    )
}

export default Favourites;