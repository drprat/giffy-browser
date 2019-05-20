import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import  ListItem  from "../components/ListItem";
import GifListAction from "../actions/gifList.action";

class ViewSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentParam: ""
        };
        this.fetchSearch = this.fetchSearch.bind(this);
    }

    componentDidMount() {
        this.fetchSearch();
    }

    componentDidUpdate() {
        const {
            match: {
                params: { searchInput }
            }
        } = this.props;
        const { currentParam } = this.state;

      //  if (currentParam !== searchInput) this.fetchSearch();
    }

    fetchSearch = () => {
        const {
            fetchKeyword,
            match: {
                params: { keyword }
            }
        } = this.props;
        fetchKeyword(keyword);
        this.setState({ currentParam: keyword });
    };

    componentWillUnmount() {
        const { clearSearchResult } = this.props;
        //clearSearchResult();
        this.setState({ currentParam: "" });
    }

    render() {
        const { keyword } = this.props;
        return (
            <div id="result-container">
                <ul>
                    {keyword.map(gif => (
                        <ListItem key={gif.id} gif={gif} />
                    ))}
                </ul>
            </div>
        );
    }
}

ViewSearch.propTypes = {
    keyword: Proptypes.array
};

const stateToProps = state => ({
    keyword: state.gifListsReducer.keyword,
});

const dispatchToProps = dispatch => ({    
    fetchKeyword: (input) => {
      dispatch(GifListAction.fetchKeyword(input));
    },
    //clearSearchResult: () => dispatch(GifListAction.clearSearchResult())
});

export default withRouter(
    connect(
        stateToProps,
        dispatchToProps
    )(ViewSearch)
);
