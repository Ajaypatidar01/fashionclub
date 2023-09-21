import { useParams } from "react-router-dom";
import productsData from '../constants/products';
import { useContext, useEffect, useState } from "react";
import Classes from '../styles/styles.module.css';
import CartContext from "../store/cartContext";

function Product() {
    const { id } = useParams();
    const {dispatch} = useContext(CartContext);
    const [thisProduct, setThisProduct] = useState([]);
    const [quatity, setQuantity] = useState(1);
    useEffect(() => {
        const data = productsData.filter(item => {
            return item.id === Number(id);
        });
        setThisProduct(data);
    }, [])

    const handleClick = (e) => {
      const toAddItem = productsData.filter((item) => {
        return item.id === Number(e.target.id);
       }) 
       const item = {...toAddItem[0],quantity :quatity};
       dispatch({type : 'ADD', item : item});
    }
    return (
        <div className={Classes.container}>
            {thisProduct.map((item) => {
                return (
                    <div key={item.id} className={Classes.thisProduct}>
                        <div className={Classes.imgbox}>
                            <img src={item.images[0]} alt="" />
                            <div>
                                <input value={quatity} type="number" min='1' max='5' onChange={(e) => setQuantity(e.target.value)}/>
                                <button id={item.id} onClick={handleClick}>Add to cart</button>
                            </div>
                        </div>
                        <div className={Classes.desc}>
                            <p>{item.title}</p>
                            <div>
                                <span style={{fontSize :'20px', fontWeight :600,marginBottom: '5px'}}>₹ {item.price}</span>
                                <span style={{color : 'white',padding : '0 5px',width : 'fit-content',borderRadius : 15,backgroundColor : 'green'}}>{item.rating.toFixed(1)}</span>
                            </div>
                            <p>{item.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aspernatur similique commodi nam soluta hic eaque saepe ipsam, repellendus dolorem libero fuga cumque quod autem!</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Product;