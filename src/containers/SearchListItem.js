import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

class SearchListItem extends React.Component {
  constructor(props) {
    super(props);
    this.renderPic = this.renderPic.bind(this);
  }

  renderPic = gif => {
    if (gif.images.downsized.url !== null) {
      return (
        <img
          className="tile-img"
          alt={gif.images}
           src={gif.images.downsized.url}
        />
      );
    }
    if (gif.poster_path !== null) {
      return (
        <img
          className="tile-img "
          alt="img"
        />
      );
    }
    return (
      <img
        alt="img"
        className="tile-img"
        src="http://via.placeholder.com/280x160"
      />
    );
  };

  render() {
    const { gif } = this.props;
    return (
      <Link className="search-tile" to="#" >
        <div className="tile-img">{this.renderPic(gif)}</div>
        <div className=" photo-overlay">
          <div className="tile-text-container">
          </div>
        </div>
      </Link>
    );
  }
}

SearchListItem.propTypes = {
  gif: Proptypes.object
};
export default SearchListItem;

