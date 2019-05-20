import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import ListHeader from "../components/ListHeader";
import GifList from "../components/GifList";
import {GifListAction} from "../actions"

class HomeList extends React.Component {
  componentDidMount() {
    const {fetchUpcoming, fetchHappy
    } = this.props;
    fetchUpcoming(); 
    fetchHappy(); 
  }

  render() {
    const { upcoming, happy } = this.props;
    return (
      <div>
        <ListHeader header="Up Coming" />
        <GifList gifList={upcoming} />
        <ListHeader header="Happy" />
        <GifList gifList={happy} />
        <ListHeader header="Up Coming" />
        <GifList gifList={upcoming} />
      </div>
    );
  }
}
HomeList.propTypes = {
  fetchUpcoming: Proptypes.func,
  upcoming: Proptypes.array,
  fetchHappy: Proptypes.func,
  happy: Proptypes.array
};

const stateToProps = state => ({
  upcoming: state.gifListsReducer.upcoming,
  happy: state.gifListsReducer.happy,
});

const dispatchToProps = dispatch => ({
  fetchUpcoming: () => {
    dispatch(GifListAction.fetchUpcoming());
  },
  fetchHappy: () => {
    dispatch(GifListAction.fetchHappy());
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(HomeList);
