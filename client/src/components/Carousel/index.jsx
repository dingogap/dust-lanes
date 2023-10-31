import React, { useEffect } from 'react';
import m42 from '../Images/m42.jpg';
import ngc300 from '../Images/ngc300.jpg';
import vela from '../Images/vela.jpg';

const Carousel = () => {
    useEffect(() => {
      // Initialize the Materialize Carousel
      const options = {
        fullWidth: true,
        indicators: true,
      };
      const carousel = document.querySelector('.carousel');
      window.M.Carousel.init(carousel, options);
    }, []);
  
    return (
      <div className="carousel">
        <a className="carousel-item" href="#one!">
          <img src={m42} alt="Image 1" />
        </a>
        <a className="carousel-item" href="#two!">
          <img src={ngc300} alt="Image 2" />
        </a>
        <a className="carousel-item" href="#three!">
          <img src={vela} alt="Image 3" />
        </a>
      </div>
    );
  };
  
  export default Carousel;