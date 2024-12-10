const initialState = {
    data: [],
    favourites: [],
    basket: []
};

export function reducer(state = initialState, action){
    switch(action.type){
        case "ADD_MANY_PRODUCTS":
            return {...state, data: [...state.data, ...action.payload]};
        case "ADD_TO_FAVOURITES":
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            }
        case "DELETE_TO_FAVOURITES":
            return {
                ...state,
                favourites: [...state.favourites.filter(item => item != action.payload)]
            }
        case "ADD_TO_BASKET":
            return {...state, basket: true}
        default:
            return state;
    }
}

export const addManyProducts = (payload) => ({type: "ADD_MANY_PRODUCTS", payload});