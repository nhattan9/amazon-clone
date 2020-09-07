
export const initialState={
    basket:[
        {
            id:"1",
            tittle:"The learn startup :How contants Innovation Creates Radiccaly Successsful",
            price:123.9,
            rating:4,
            image:"https://images-na.ssl-images-amazon.com/images/I/315t-VOAjgL._AC_SY200_.jpg"
        },
        {
            id:"1",
            tittle:"The learn startup :How contants Innovation Creates Radiccaly Successsful",
            price:411.9,
            rating:4,
            image:"https://images-na.ssl-images-amazon.com/images/I/315t-VOAjgL._AC_SY200_.jpg"
        },
    ],
    user:null,
};



//make subtatol 
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0 );
 


const reducer= (state,action)=>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logic for adding item to basket
            return {
                ...state,
                basket:[...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
           //logic for removing item to basket
           //we cloned to basket 
           let newBasket=[...state.basket];

           //we check to see if product exist
           const index = state.basket.findIndex((basketItem) =>basketItem.id === action.id);
           if(index >= 0){
               //item exists in basket , remove it 
               newBasket.splice(index,1);
        
           }else{
               console.warn(
                   `Cant remove product{id: ${action.id}} as its not in basket`
               );
           }
           return {...state, basket: newBasket,};
        default:
           return state;
    }
}
export default reducer;