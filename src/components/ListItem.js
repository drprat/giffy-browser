import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.renderPic = this.renderPic.bind(this);
  }

  renderPic = gif => {
    if (gif.images.downsized.url !== null) {
      return (
        <img
          className="tile-img"
          alt={gif.images} data-src="" 
           src={gif.images.downsized.url}
        />
      );
    }
  };

  render() {
    const { gif } = this.props;
    return (
      <Link className="tile" to="#" >
        <div className="tile-img">{this.renderPic(gif)}</div>
        <div className=" photo-overlay">
          <div className="tile-text-container">
          </div>
        </div>
      </Link>
    );
  }
}

ListItem.propTypes = {
  gif: Proptypes.object
};
export default ListItem;

