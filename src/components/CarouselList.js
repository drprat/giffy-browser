import React, { Component } from "react";
import Proptypes from "prop-types";
import InfiniteCarousel from 'react-leaf-carousel';
import ListItem from "./ListItem";

export default class CarouselList extends Component {

    renderGifList = (gifList) =>
        gifList.map(gif => <ListItem key={gif.id} gif={gif} />);

    render() {
        const { gifList = [] } = this.props;
        return (
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
            >
                <div>{this.renderGifList(gifList)}{gifList}</div>
             </InfiniteCarousel>
        );
    }
}
CarouselList.propTypes = {
    gifList: Proptypes.array
  };