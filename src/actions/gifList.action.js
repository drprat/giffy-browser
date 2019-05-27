import GphApiClient from 'giphy-js-sdk-core';
import constants from "../actions/constants";

export default {
  fetchExcited: () => async dispatch => {
    try {
        var client = GphApiClient("F4D3Q1qXdtsGruEH30k6RRigE2IDhsvc")
        client.search('gifs', {"q": "excited"})
        .then((response) => {
        
        console.log(response.data) 
        dispatch({
          type: constants.FETCH_EXCITED,
          payload: response.data
        });
        })
      
    } catch (err) {
      dispatch({
        type: constants.FETCH_GIPHY_ERROR,
        payload: "Error occured while fetching from Giphy API"
      });
    }
  },

  fetchHappy: () => async dispatch => {
    try {
        var client = GphApiClient("F4D3Q1qXdtsGruEH30k6RRigE2IDhsvc")
        client.search('gifs', {"q": "happy"})
        .then((response) => {
        
        console.log(response.data) 
        dispatch({
          type: constants.FETCH_HAPPY,
          payload: response.data
        });
        })
      
    } catch (err) {
      dispatch({
        type: constants.FETCH_GIPHY_ERROR,
        payload: "Error occured while fetching from Giphy API"
      });
    }
  },
  fetchKeyword: (keyword) => async dispatch => {
    try {
        var client = GphApiClient("F4D3Q1qXdtsGruEH30k6RRigE2IDhsvc")
        client.search('gifs', {"q": keyword})
        .then((response) => {        
        console.log(response.data) 
        dispatch({
          type: constants.FETCH_KEYWORD,
          payload: response.data
        });
        })
      
    } catch (err) {
      dispatch({
        type: constants.FETCH_GIPHY_ERROR,
        payload: "Error occured while fetching from Giphy API"
      });
    }
  },
  clearSearchResult: () => dispatch => {
    dispatch({
      type: constants.CLEAR_SEARCH_RESULT
    });
  }
};
