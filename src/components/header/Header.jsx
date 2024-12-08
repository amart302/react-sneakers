import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

function Header(){

    return(
        <header>
            <div className="head_block">
                <div className="head_podBlock1">
                    <img src="./images/logo.svg" />
                    <div>
                        <h2>REACT SNEAKERS</h2>
                        <span>Магазин лучших кроссовок</span>
                    </div>
                </div>
                <div className="head_podBlock2">
                    <Link to="/basket">
                        <img src="./images/basketIcon.svg" alt="" />
                        Корзина
                    </Link>
                    <Link to="/favourites">
                        <img src="./images/favouritesIcon.svg" alt="" />
                        Избранное
                    </Link>
                    <Link to="/profile">
                        <img src="./images/profileIcon.svg" alt="" />
                        Профиль
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;