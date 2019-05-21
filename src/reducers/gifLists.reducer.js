import constants from "../actions/constants";

const initialState = {  
  excited: [],
  happy: [],
  keyword: []
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
   
    case constants.FETCH_EXCITED:
      newState.excited = action.payload;
      return newState;

    case constants.FETCH_HAPPY:
      newState.happy = action.payload;
      return newState;

    case constants.FETCH_KEYWORD:
      newState.keyword = action.payload;
      return newState;
      
    default:
      return state;
  }
};
