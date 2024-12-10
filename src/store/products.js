import axios from "axios"
import { addManyProducts } from "./reducer"


export const fetchData = () => {
    return (dispatch) => {
        fetch("https://6755d98811ce847c992b5c62.mockapi.io/product")
            .then(res => res.json())
            .then(json => dispatch(addManyProducts(json)))
            .catch(err => console.error(err));
    }
}