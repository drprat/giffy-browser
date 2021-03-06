import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import ListHeader from "../../components/ListHeader";
import GifList from "../../components/GifList";
import CarouselList, {InfCarousel} from "./CarouselList"
import {GifListAction} from "../../actions"

class CarouselLibList extends React.Component {
  componentDidMount() {
    const {fetchExcited, fetchHappy, fetchKeyword
    } = this.props;
    fetchExcited(); 
    fetchHappy(); 
    fetchKeyword("Confident");
  }

  render() {
    const { excited, happy, keyword } = this.props;
    return (
      <div>
        <ListHeader header="Carousel" />
        <CarouselList gifList={excited}/>                
      </div>
    );
  }
}
CarouselLibList.propTypes = {
  fetchExcited: Proptypes.func,
  excited: Proptypes.array,
  fetchHappy: Proptypes.func,
  happy: Proptypes.array,
  fetchKeyword: Proptypes.func,
  keyword: Proptypes.array
};

const stateToProps = state => ({
  excited: state.gifListsReducer.excited,
  happy: state.gifListsReducer.happy,
  keyword: state.gifListsReducer.keyword,
});

const dispatchToProps = dispatch => ({
  fetchExcited: () => {
    dispatch(GifListAction.fetchExcited());
  },
  fetchHappy: () => {
    dispatch(GifListAction.fetchHappy());
  },
  fetchKeyword: (input) => {
    dispatch(GifListAction.fetchKeyword(input));
  },
});

export default connect(
  stateToProps,
  dispatchToProps
)(CarouselLibList);
