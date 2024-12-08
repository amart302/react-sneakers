

import { useDispatch, useSelector } from "react-redux";
import "./catalog.css";

function Catalog(){
    const dispatch = useDispatch();
    const data = useSelector(state => state);

    return(
        <div className="catalog_podBlock">
            <button onClick={() => dispatch({
                type: "INCREMENT",
            })}>+</button>
            <span>{data}</span>
            <button onClick={() => dispatch({
                type: "DECREMENT",
            })}>-</button>
        </div>
    )
}

export default Catalog;