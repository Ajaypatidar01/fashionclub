import { useReducer } from "react";
import CartContext from "./cartContext";

const initialValue = {
    items : [],
    totalAmount : 0,
}
const cartReducer = (state, action) => {
    const index = state.items.findIndex(object =>  object.id === action.item.id);
    let updatedItems;
    let updatedTotalAmount; 
    if(action.type === 'ADD'){
        if(index >= 0){ 
            console.log('>=0');
            const prevAmount = state.items[index].quantity * state.items[index].price;
           const Item = {...state.items[index],quantity : Number(action.item.quantity)}
            console.log('thisITem',Item);
             state.items.splice(index,1,Item);
             updatedItems = state.items;
             
             updatedTotalAmount =(state.totalAmount - prevAmount) + (Item.price * Item.quantity);
        }else{
            updatedItems = state.items.concat(action.item);
            updatedTotalAmount = state.totalAmount + (action.item.price * action.item.quantity);
        }
    }
    else if(action.type === 'INCREASE'){
        console.log('you ran');
        const thisItem = {...state.items[index], quantity:state.items[index].quantity + 1};
        state.items.splice(index,1,thisItem);
        updatedItems = state.items;
        updatedTotalAmount = state.totalAmount + (thisItem.price * 1);
    }
    else if(action.type === 'REMOVE'){
       const thisItem = {...state.items[index],quantity : state.items[index].quantity - 1};
       state.items.splice(index,1,thisItem);
       updatedItems = state.items;
       updatedTotalAmount = state.totalAmount - (thisItem.price * 1);
    }
    else if(action.type === 'DELETE'){
        updatedItems = initialValue.items;
        updatedTotalAmount = initialValue.totalAmount;
    }
    return {
        items : updatedItems,
        totalAmount : updatedTotalAmount
    }  
  
}
function CartProvider (props) {
    const [cartState, dispatch] = useReducer(cartReducer, initialValue);
    
    const cartManager = {
        items : cartState.items,
        totalAmount : cartState.totalAmount,
        dispatch,
    }
    return(
        <CartContext.Provider value={cartManager}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;