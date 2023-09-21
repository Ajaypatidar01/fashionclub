import Classes from '../styles/styles.module.css';
import Img1 from '../assets/slider/slide1.jpg';
import Img2 from '../assets/slider/slide2.jpg';
import Img3 from '../assets/slider/slide3.jpg';
import { useEffect, useState } from 'react';

function Main(){
    const [index, setIndex] = useState(0);
    const slideImage = [
        Img1,Img2,Img3
    ] 
      
    const changeSlides = () => {
        console.log(index);
        if(index === slideImage.length-1){
          setIndex(0);
        } else{ 
        setIndex(prev => prev+1);}
    }
    return(
        <div className={Classes.slider}>
          <button><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></button>
          <div>
            <img className={Classes.slide} src={slideImage[index]} alt="" />
            <span>Buy 1 <br /> Get 1</span>
          </div>
          <button onClick={changeSlides}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
        </div>
    );
}

export default Main;