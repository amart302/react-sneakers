import React from "react";
import Header from "../../components/header/Header";
import Catalog from "../../components/catalog/Catalog";

import "./main.css";


function Main(){

    return(
        <div className="content">
            <Header />
            <main>
                <img src="./images/mainImage.png" alt="" className="mainImage" />
                <div className="catalog">
                    <h2>Все кроссовок</h2>
                    <Catalog />
                </div>
            </main>
        </div>
    )
}

export default Main;