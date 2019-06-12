import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "font-awesome/css/font-awesome.min.css"

import Slider from "react-slick";
import InfiniteCarousel from 'react-leaf-carousel';
import Proptypes from "prop-types";
import ListItem from "../../components/ListItem";

const settings = {
    speed: 300,
    slidesToShow: 4,
    lazyLoad: true,
    infinite: true,
    slidesToScroll: 2,    
    //nextArrow: <div className="slick-next"><i class="fa fa-chevron-right" alt="arrow_right"/></div>,
    //prevArrow: <div class="slick-prev"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true
        }
      }
    ]
  };

  const CarouselList = ({gifList}) => ( 
    <Slider {...settings}>
        {gifList.map(gif => <ListItem key={gif.id} gif={gif} />)}
    </Slider>
);

CarouselList.propTypes = {
    gifList: Proptypes.array
  };

  export default CarouselList;