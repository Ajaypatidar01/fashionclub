import { useContext, useEffect, useState } from 'react';
import Classes from '../styles/styles.module.css';
import CartContext from '../store/cartContext';
import Products from '../constants/products';
import {useNavigate} from 'react-router-dom';

function Cart({ setShowCart }) {
    const { items, totalAmount, dispatch } = useContext(CartContext);
    const [cartHasItem, setCartHasItem] = useState(false);
    
    useEffect(() => {
     if(items.length > 0 ){
        console.log('len',items.length);
        setCartHasItem(true);
     }
    },[items]) 

    const navigate = useNavigate();
    const handleClick = (e) => {
       const item = Products.filter(item => item.id === Number(e.target.id))
       if(e.target.innerHTML === '+'){
         dispatch({type : 'INCREASE', item : item[0]})
       }
       if(e.target.innerHTML === '-'){
        console.log('de',item);
        dispatch({type : 'REMOVE', item :  item[0]})
       }
    }
    return (
        <>
            <div onClick={() => setShowCart(prev => !prev)} className={Classes.backdrop}>

            </div>
            <div className={Classes.cart}>
                <h1>Items</h1>
                {items.map((product) => {
                    return (
                        <div key={product.id} className={Classes.cartitem}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <span>{product.title}</span>
                                <div>
                                    <span>₹ {product.price}</span>
                                </div>
                                <div className={Classes.quantity}>
                                    <button id={product.id} onClick={handleClick}>-</button>
                                    <input type="text" value={product.quantity} readOnly />
                                   {cartHasItem && <button id={product.id} onClick={handleClick}>+</button>}
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className={Classes.pricedetail}>
                    <div>
                        <span>Total</span>
                        <span>₹ {totalAmount}</span>
                    </div>
                    <div>
                        <span>shipping Charges</span>
                        <span style={{color : 'green'}}>Free</span>
                    </div>
                </div>
                    {cartHasItem && <button onClick={() => {navigate('/order'); setShowCart(prev => !prev)}} className={Classes.order_btn}>Order Now</button> }
            </div>
        </>
    );
}

export default Cart;