

import { useDispatch, useSelector } from "react-redux";
import "./catalog.css";

function Catalog(){
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const fav = useSelector(state => state.favourites);
    
    return(
        <div className="catalog_podBlock">
            {
                data.map(item => (
                    <div className="productCard">
                        <div className="favourites-block" onClick={() => {
                            (!fav.find(elem => elem == item)) ? dispatch({
                                type: "ADD_TO_FAVOURITES",
                                payload: item
                            }) : dispatch({
                                type: "DELETE_TO_FAVOURITES",
                                payload: item
                            })
                        }}>
                            <img src={
                                (fav.find(el => el == item)) ? "./images/favouritesIconActive.svg": "./images/favouritesIcon.svg"

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