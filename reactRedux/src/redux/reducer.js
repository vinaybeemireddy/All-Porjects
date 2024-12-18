import { ADD, SUB } from "../actionType";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD:
      return { ...state, counter: state.counter + payload };
    case SUB:
      return { ...state, counter: state.counter - payload };
    default:
      return state;
  }
};
