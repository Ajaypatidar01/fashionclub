import { useEffect, useState } from "react";
import Classes from '../styles/styles.module.css';
import productsData from '../constants/products';
import PageFilter from "./pageFilter";
import {Link} from 'react-router-dom';

function Products() {
    const [products, setData] = useState(productsData);
    const [isLoading, setIsLoading] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [filterUsed, setFilterUsed] = useState(false);
    
    useEffect(() => {
      
    },[filteredData])
    return (
            <div className={Classes.page}>
              <PageFilter products={products} setFilteredData={setFilteredData} setFilterUsed={setFilterUsed}/>    
            <div className={Classes.products}>
            {isLoading && <div className={Classes.loading}></div>}
            { filteredData.length !== 0 ?
              filteredData.map((product) => {
                return <div  className={Classes.product_box} key={product.id}>
                   <Link to={`/product/${product.id}`}> <img src={product.thumbnail} alt="prod" /></Link>
                    <p>{product.title}</p>
                    <div className={Classes.price}>
                        <p>{product.price - 5}</p>
                        <p style={{textDecoration : 'line-through'}}>{product.price}</p>
                    </div>
                </div>
              })  
             :<>  
             {filterUsed ? <h1 style={{width : 'calc(100vw - 200px)' }}>No Products</h1> 
               : products.map((product) => {
                return <div className={Classes.product_box} key={product.id}>
                    <Link to={`/product/${product.id}`}> <img src={product.thumbnail} alt="prod" /></Link>
                    <p>{product.title}</p>
                    <div className={Classes.price}>
                        <p>{product.price - 5}</p>
                        <p style={{textDecoration : 'line-through'}}>{product.price}</p>
                    </div>
                </div>
            })}
            </>
            }
        </div>
        </div>
    );
}

export default Products;