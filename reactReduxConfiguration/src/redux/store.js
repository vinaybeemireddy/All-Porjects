import {
  applyMiddleware,
  combineReducers,
  createStore,
  legacy_createStore,
} from "redux";
import { reducer as authReducer } from "./authentication/reducer";
import { reducer as counterReducer } from "./counter/reducer";
import { reducer as todoReducer } from "./todo/reducer";

const rootReducer = combineReducers({
  counterReducer,
  todoReducer,
  authReducer,
});

const logger = (a) => (b) => (c) => {
  console.log(a);
};
export const store = legacy_createStore(rootReducer, applyMiddleware(logger));

//function currying
// function logger(a,b,c){
//   return a+b+c;
// }
// function logger(a) {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// }

// logger(1)(2)(3);
