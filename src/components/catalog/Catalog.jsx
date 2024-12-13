import { useDispatch, useSelector } from "react-redux";
import "./catalog.css";
import { useEffect, useState } from "react";
import { fetchData } from "../../store/products";
import Sceleton from "../sceleton/Sceleton";

function Catalog(){
    const [ isLoading, setIsLoading ] = useState(true); 
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const fav = useSelector(state => state.favourites);
    const basket = useSelector(state => state.basket);

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

    function handleBasketClick(item){
        if(!basket.find(elem => elem == item)){
            dispatch({
                type: "ADD_TO_BASKET",
                payload: item
            })
        }
        
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchData());
            setIsLoading(false);
        }, 800);
    }, [])

    return(
        <div>
            {
                (isLoading || !data) 
                ? <Sceleton count={12}/>
                : (<div className="catalog_podBlock">{data.map(item => (
                    <div className="productCard" key={item.id}>
                        <div onClick={() => handleFavClick(item)}>
                            {
                                (fav.find(el => el == item)) ? (<img className="favourites-block favActive" src="./images/favouritesIconActive.svg" alt="" />) : (<img className="favourites-block" src="./images/favouritesIcon.svg" alt="" />)
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
                ))}</div>)
            }
        </div>
    )
}

export default Catalog;