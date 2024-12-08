export function reducer(state = 0, action){
    switch(action.payload){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}