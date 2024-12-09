const initialState = [
    {
        id: 1,
        imgPath: "./images/productImage1.png",
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: "12 999",
        favourites: false,
        basket: false
    },
    {
        id: 2,
        imgPath: "./images/productImage2.png",
        title: "Мужские Кроссовки Nike Air Max 270",
        price: "12 999",
        favourites: false,
        basket: false
    },
    {
        id: 3,
        imgPath: "./images/productImage3.png",
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: "8 499",
        favourites: false,
        basket: false
    },
    {
        id: 4,
        imgPath: "./images/productImage4.png",
        title: "Кроссовки Puma X Aka Boku Future Rider",
        price: "8 499"
    },
    {
        id: 5,
        imgPath: "./images/productImage5.png",
        title: "Мужские Кроссовки Under Armour Curry 8",
        price: "15 199",
        favourites: false,
        basket: false
    },
    {
        id: 6,
        imgPath: "./images/productImage6.png",
        title: "Мужские Кроссовки Nike Kyrie 7",
        price: "11 299"
    },
    {
        id: 7,
        imgPath: "./images/productImage7.png",
        title: "Мужские Кроссовки Jordan Air Jordan 11",
        price: "10 799",
        favourites: false,
        basket: false
    },
    {
        id: 8,
        imgPath: "./images/productImage8.png",
        title: "Мужские Кроссовки Nike LeBron XVIII",
        price: "16 499"
    },
    {
        id: 9,
        imgPath: "./images/productImage9.png",
        title: "Мужские Кроссовки Nike Lebron XVIII Low",
        price: "13 999",
        favourites: false,
        basket: false
    },
    {
        id: 10,
        imgPath: "./images/productImage10.png",
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: "8 499",
        favourites: false,
        basket: false
    },
    {
        id: 11,
        imgPath: "./images/productImage11.png",
        title: "Кроссовки Puma X Aka Boku Future Rider",
        price: "8 999",
        favourites: false,
        basket: false
    },
    {
        id: 12,
        imgPath: "./images/productImage12.png",
        title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
        price: "11 299",
        favourites: false,
        basket: false
    }
];

export function reducer(state = initialState, action){
    switch(action.type){
        case "ADD_TO_FAVOURITES":
            
            state.map(item => {
                if(item.id == action.payload)
                    return [...state, {...item, favourites: true}];
                else
                    return [...state];
            })
        case "DELETE_TO_FAVOURITES":
            return {...state, favourites: false}
        case "ADD_TO_BASKET":
            return {...state, basket: true}
        default:
            return state;
    }
}