import { thunk } from "redux-thunk";
import { reducer as productReducer } from "./redux/productReducer/reducer";
import { reducer as authReducer } from "./redux/authReducer/reducer";

import { legacy_createStore, applyMiddleware, combineReducers } from "redux";

const rootReducer = combineReducers({
  productReducer,
  authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
