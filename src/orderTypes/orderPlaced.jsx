import Classes from '../styles/styles.module.css';
import CartContext from '../store/cartContext';
import { useContext } from 'react';
import {Link} from 'react-router-dom';

function OrderPlaced() {
    const {items} = useContext(CartContext);
    return (
        <div className={Classes.success}>
            <h1>Yah! Order Recived</h1>
            <div>
                <Link to='/all-orders'>All Orders</Link>
                <Link to='/'>Home</Link>
            </div>
        </div>
    );
}

export default OrderPlaced;