import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderDesc = this.renderDesc.bind(this);
    this.renderPic = this.renderPic.bind(this);
  }

  renderTitle = title => {
    if (title.length < 20) {
      return <h5 className="search-tile-title">{title}</h5>;
    }
    if (title.length < 35) {
      return <h5 className="search-tile-title long-title">{title}</h5>;
    }
    return <h5 className="search-tile-title longer-title">{title}</h5>;
  };

  renderDesc = desc => {
    if (desc.length > 150) {
      // eslint-disable-next-line no-param-reassign
      desc = desc.substring(0, 135);
      return <p className="tile-desc">{desc} ... read more</p>;
    }
    return <p className="tile-desc">{desc}</p>;
  };

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

