import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";

import "./favourites.css";
import { useNavigate } from "react-router-dom";

function Favourites(){
    const dispatch = useDispatch();
    const favourites = useSelector(state => state.favourites);
    const basket = useSelector(state => state.basket);
    const navigate = useNavigate();

    function handleFavClick(item){
        if(!favourites.find(elem => elem == item)){
            dispatch({
                type: "ADD_TO_FAVOURITES",
                payload: item
            })
        }else{
            dispatch({
                type: "DELETE_TO_FAVOURITES",
                payload: item
            })
        }
    }

    function handleBasketClick(item){
        if(!basket.find(elem => elem == item)){
            dispatch({
                type: "ADD_TO_BASKET",
                payload: item
            })
        }
        
    }

    return(
        <div className="content">
            <Header />
            <div className="favourites_block_parent">
                {
                    (favourites.length) ?
                    <div className="favourites_block">
                        <div className="favourites_podBlock1">
                            <button onClick={() => navigate("/")}>
                                <img src="./images/arrow.svg" alt="" />
                            </button>
                            <h1>Мои закладки</h1>
                        </div>
                        <div className="favourites_podBlock2">
                            {
                                favourites.map(item => (
                                    <div className="productCard" key={item.id}>
                                        <div onClick={() => handleFavClick(item)}>
                                            {
                                                (favourites.find(el => el == item)) ? (<img className="favourites-block favActive" src="./images/favouritesIconActive.svg" alt="" />) : (<img className="favourites-block" src="./images/favouritesIcon.svg" alt="" />)
                                            }
                                        </div>
                                        <img className="productImg" src={item.imgPath} alt="" />
                                        <p>{item.title}</p>
                                        <div className="productCard-podBlock">
                                            <div>
                                                <p className="heading-price">Цена:</p>
                                                <p className="price">{item.price} руб.</p>
                                            </div>
                                            <div onClick={() => handleBasketClick(item)}>
                                                {
                                                    (basket.find(el => el == item)) ? (<img className="basketActive" src="./images/basketIconActive.svg" alt="" />) : (<img className="basket-block" src="./images/basketIcon.svg" alt="" />)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div> : <div style={{display: "flex", flexDirection: "column"}}>
                        {/* <img src="./images/emptyFavourites.svg" alt="" /> */}
                        <h1>У вас нет заказов</h1>
                        <button onClick={() => navigate("/")}>Вернуться назад</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Favourites;