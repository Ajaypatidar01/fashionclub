import { useState } from 'react';
import Classes from '../styles/styles.module.css';

function PageFilter({products, setFilteredData, setFilterUsed}) {
    const [category, setCategory] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [rating, setRating]  = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFilterUsed(true);
        let filteredData = products;
        if (category !== '')  
        {filteredData = products.filter((item) => {
            return item.category === category
        });console.log('af category',filteredData.length);}
        else{ console.log('no category selected'); }
        if(rating !== ''){
         filteredData = filteredData.filter((item) => {
            return item.rating >= rating
        })} console.log('af rating',filteredData.length);
        if(priceRange !== ''){
         filteredData = filteredData.filter((item) => {
            return item.price >= priceRange
         })
        }
       
        console.log('last',filteredData.length);
        setFilteredData(filteredData);
    }
    const handleChange = (e) => {
        setCategory(e.target.value);
    }
    const handleRatingChange = (e) => {
        setRating(e.target.value);
    }
    const handleRangeChange = (e) => {
        setPriceRange(e.target.value);
    }
    return(
     <div className={Classes.pagefilter}>   
     <span>Filter</span>
     <p style={{fontWeight : 700, textAlign :'left', marginBottom : 0}}>Categories</p>
     <form onSubmit={handleSubmit}>
        <div>
        <input onChange={handleChange} id='smartphones' type="radio" name='cat' value='smartphones' />
        <label htmlFor="smartphones">smartphones</label>
        </div>
        <div>
        <input onChange={handleChange} id='laptops' type="radio" name='cat' value='laptops'/>
        <label htmlFor="laptops">laptops</label>
        </div>
        <div>
        <input type="radio" onChange={handleChange} id='fragrances' name='cat' value='fragrances' />
        <label htmlFor="fragrances">fragrances</label>
        </div>
        <div>
        <input type="radio" onChange={handleChange} id='skincare' name='cat' value='skincare' />
        <label htmlFor="skincare">skincare</label>
        </div>
        <div>
        <input type="radio" onChange={handleChange} id='groceries' name='cat' value='groceries' />
        <label htmlFor="groceries">groceries</label>
        </div>
        <div>
        <input type="radio" onChange={handleChange} id='home-decoration' name='cat' value='home-decoration' />
        <label htmlFor="home-decoration">home-decoration</label>
        </div>
        <div className={Classes.selection}>
            <select name="rating" id="rating" onChange={handleRatingChange} >
              <option selected hidden disabled>Rating</option>   
              <option value="4">4★ & above</option>
              <option value="4.5">4.5★ & above</option>
            </select>
            <select name="range" id="range" onChange={handleRangeChange} >
              <option selected hidden disabled>Range</option>   
              <option value="200">200 to 299</option>
              <option value="300">300 & above</option>
              <option value="5000">Above 5000</option>
            </select>
        </div>
        <button className={Classes.apply_btn} type='submit'>Apply</button>
     </form>
     </div>
    );
}

export default PageFilter;