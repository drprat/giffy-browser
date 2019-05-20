import { combineReducers } from "redux";

import gifListsReducer from "./gifLists.reducer";
import errorReducer from "./error.reducer";

const rootReducer = combineReducers({
  gifListsReducer,
  errorReducer
});

export default rootReducer;
