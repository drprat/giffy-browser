import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "font-awesome/css/font-awesome.min.css"

import Slider from "react-slick";
import InfiniteCarousel from 'react-leaf-carousel';
import Proptypes from "prop-types";
import ListItem from "./ListItem";

function LeftNavButton(props) {
  const {className, style, onClick} = props
  return (
      <div
          className="slick-arrow"
          style={{...style, display: 'block'}}
          onClick={onClick}
      >
        <i class="fa fa-chevron-left"></i>
      </div>
  );
}

function RightNavButton(props) {
  const {className, style, onClick} = props
  return (
      <div
          className="slick-arrow"
          style={{...style, display: 'block'}}
          onClick={onClick}
      >
          <i class="fa fa-chevron-right" alt="arrow_right"/>
      </div>
  );
}

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
export const InfCarousel = ({gifList}) => (
<InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  ><div>1</div>
      {gifList.map(gif => <ListItem key={gif.id} gif={gif} />)}
  </InfiniteCarousel>
);

CarouselList.propTypes = {
    gifList: Proptypes.array
  };

  export default CarouselList;