import React from "react";
import Proptypes from "prop-types";
import { findDOMNode } from "react-dom";
import $ from "jquery";
import ListItem from "./ListItem";

class GifList extends React.Component {
  state = {
    margin: 0
  };

  renderGifList = gifList =>
    gifList.map(gif => <ListItem key={gif.id} gif={gif} />);

  handleLeftClick = e => {
    e.preventDefault();
    if (this.state.margin < 350) {
      this.setState({
        margin: this.state.margin + 350
      });
      // eslint-disable-next-line
      const el = findDOMNode(this.refs.content);
      $(el).animate(
        {
          marginLeft: "+=350px"
        },
        "fast"
      );
    }
  };

  handleRightClick = e => {
    e.preventDefault();
    if (this.state.margin > -4200) {
      this.setState({
        margin: this.state.margin - 350
      });
      // eslint-disable-next-line
      const el = findDOMNode(this.refs.content);
      $(el).animate(
        {
          marginLeft: "-=350px"
        },
        "fast"
      );
    }
  };

  render() {
    const { gifList } = this.props;
    return (
      <div className="list-container">
        <span
          onClick={this.handleLeftClick}
          className="left-controls"
          role="button"
        />

        <div className="module-section clearfix">
          {/* eslint-disable-next-line react/no-string-refs */}
          <ul id="content" ref="content">
            <div className="listRow">{this.renderGifList(gifList)}</div>
          </ul>
        </div>

        <span
          onClick={this.handleRightClick}
          className="right-controls"
          role="button"
        />
      </div>
    );
  }
}

GifList.propTypes = {
  gifList: Proptypes.array
};
export default GifList;
