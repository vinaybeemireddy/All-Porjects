import { thunk } from "redux-thunk";
import { reducer } from "./redux/productReducer/reducer";

import { legacy_createStore, applyMiddleware } from "redux";

export const store = legacy_createStore(reducer, applyMiddleware(thunk));
