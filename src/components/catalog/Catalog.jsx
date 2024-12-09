

import { useDispatch, useSelector } from "react-redux";
import "./catalog.css";
import { useState } from "react";

function Catalog(){
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const fav = useSelector(state => state.favourites);
    const [ favBlockStyles, setFavBlockStyles] = useState({
        border: "solid 1px #f8f8f8",
    })

    function handleFavClick(item){
        if(!fav.find(elem => elem == item)){
            dispatch({
                type: "ADD_TO_FAVOURITES",
                payload: item
            })
            setFavBlockStyles({
                border: "solid 1px #fef0f0",
                backgroundColor: "#fef0f0"
            })
        }else{
            dispatch({
                type: "DELETE_TO_FAVOURITES",
                payload: item
            })
            setFavBlockStyles({
                border: "solid 1px #f8f8f8",
                backgroundColor: "white"
            })
        }
    }

    return(
        <div className="catalog_podBlock">
            {
                data.map(item => (
                    <div className="productCard">
                        <div className="favourites-block" style={favBlockStyles} onClick={() => handleFavClick(item)}>
                            <img src={
                                (fav.find(el => el == item)) ? "./images/favouritesIconActive.svg" : "./images/favouritesIcon.svg"
                            } alt="" />
                        </div>
                        <img src={item.imgPath} alt="" />
                        <p>{item.title}</p>
                        <p>Цена:</p>
                        <p>{item.price}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Catalog;