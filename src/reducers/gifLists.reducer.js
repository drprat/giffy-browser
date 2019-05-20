import constants from "../actions/constants";

const initialState = {  
  upcoming: [],
  happy: []
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
   
    case constants.FETCH_UPCOMING:
      newState.upcoming = action.payload;
      return newState;

    case constants.FETCH_HAPPY:
      newState.happy = action.payload;
      return newState;

    default:
      return state;
  }
};
