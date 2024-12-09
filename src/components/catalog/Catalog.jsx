

import { useDispatch, useSelector } from "react-redux";
import "./catalog.css";

function Catalog(){
    const dispatch = useDispatch();
    const data = useSelector(state => state);

    return(
        <div className="catalog_podBlock">
            {
                data.map(item => (
                    <div className="productCard">
                        <div className="favourites-block" onClick={() => {
                            (!item.favourites) ? dispatch({
                                type: "ADD_TO_FAVOURITES",
                                payload: item.id
                            }): dispatch({
                                type: "DELETE_TO_FAVOURITES",
                                payload: item.id
                            })
                        }}>
                            <img src={(!item.favourites) ? "./images/favouritesIcon.svg" : "./images/favouritesIconActive.svg"} alt="" />
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