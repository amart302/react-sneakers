import { useDispatch, useSelector } from "react-redux";
import "./catalog.css";
import { useEffect, useState } from "react";
import { fetchData } from "../../store/products";

function Catalog(){
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const fav = useSelector(state => state.favourites);

    function handleFavClick(item){
        if(!fav.find(elem => elem == item)){
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

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return(
        <div className="catalog_podBlock">
            {
                data.map(item => (
                    <div className="productCard" key={item.id}>
                        <div onClick={() => handleFavClick(item)}>
                            {
                                (fav.find(el => el == item)) ? (<img className="favourites-block active" src="./images/favouritesIconActive.svg" alt="" />) : (<img className="favourites-block" src="./images/favouritesIcon.svg" alt="" />)
                            }
                        </div>
                        <img className="productImg" src={item.imgPath} alt="" />
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