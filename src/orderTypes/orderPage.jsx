import Classes from '../styles/styles.module.css';
import { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import CartContext from '../store/cartContext';
const initialValue = {
    fullName : '',
    phone    : '',
    email    : '',
    address  : '',
    pincode  : '',
}
function OrderPage() {
    const {items, totalAmount, dispatch} = useContext(CartContext); 
    const [userDetails, setUserDetails]= useState(initialValue);
    const [isValid, setIsValid] = useState(true);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setIsValid(true);
        setUserDetails(prev => { return{...prev,[e.target.id] : e.target.value}});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(userDetails.fullName.length >= 1 && userDetails.address.length >= 10){
        setUserDetails(initialValue);
        localStorage.setItem('user', JSON.stringify(userDetails));
        const orderItems = { items, totalAmount };
        localStorage.setItem('order',JSON.stringify(orderItems));
         dispatch({type : 'DELETE', item : items[0]});
         navigate('/order-success');
        }
        else{
            setIsValid(false);
            return;
        }
    }
    return(
     <div className={Classes.order_page}>
         <p style={{color : 'rgb(252, 63, 66)', fontSize : 30,margin : 10,fontWeight : 600}}>Order Now</p>
         <form onSubmit={handleSubmit}>
           <div>
             <label htmlFor="fullName">Full Name</label>
             <input value={userDetails.fullName} onChange={handleChange} type="text" id='fullName' placeholder='name'/>
           </div>
           <div>
            <label htmlFor="phone">Phone</label>
            <nav className={Classes.number}>
              <select style={{outline : 'none'}} value='91'>
                <option value="91">+91</option>
                <option disabled value="92">+92</option>
              </select> 
              <input value={userDetails.phone} onChange={handleChange} type="text" id='phone' placeholder='phone'/>
            </nav>
           </div>
           <div>
            <label htmlFor="email">Email</label>
            <input value={userDetails.email} onChange={handleChange} type="email" id='email' placeholder='email'/>
           </div>
           <div>
            <label htmlFor="address">Address</label>
            <input  value={userDetails.address} onChange={handleChange} type="text" id='address' placeholder='complete address'/>
           </div>
           <div>
             <label htmlFor="pincode">Pincode</label>
             <input id='pincode' type="text" onChange={handleChange} value={userDetails.pincode} placeholder='pincode'/>
           </div>
           { !isValid && <p style={{color : 'red'}}>Please enter correct information</p> }
           <button type='submit'>Submit</button>
         </form>
     </div>
    );
}

export default OrderPage;