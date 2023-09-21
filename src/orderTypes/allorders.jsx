import CartContext from "../store/cartContext";
import { useEffect, useState } from "react";
import Classes from '../styles/styles.module.css';
import { Link } from 'react-router-dom';
function AllOrders() {
    const [orders, setOrders]= useState({
        items : [],
        totalAmount : 0,
    });
    const [address, setAddress] = useState('');
    useEffect(() => {
     const orders = localStorage.getItem('order');
     const address = localStorage.getItem('user');
     setOrders(JSON.parse(orders));
     setAddress(JSON.parse(address));
    },[])
    console.log(orders);
    return(
        <div className={Classes.allOrders}>
        {
            orders.items.map((product) =>{ return <Link to={`/product/${product.id}`}>
                 <div className={Classes.orderbox} key={product.id}>
         <img src={product.thumbnail} alt="prod" />
        <p>{product.title}</p>
        <div className={Classes.orderprice}>
            <p>{product.price - 5}</p>
            <p style={{textDecoration : 'line-through'}}>{product.price}</p>
        </div>
        <p style={{marginLeft : '60%'}}>{product.price * product.quantity}</p>
    </div></Link>})}
    <div className={Classes.totalA}>
    <span>Total</span>
    <span>{orders.totalAmount}</span>
    </div>
    <div className={Classes.address}>
      <h2>To be delivered at :</h2>
      <div style={{display : 'flex', gap  :50}}>
        <p>{address.fullName}</p>
        <p>{address.phone}</p>
      </div>  
      <p>{address.address} {address.pincode}</p>
    </div>
    </div>
    );
}

export default AllOrders;