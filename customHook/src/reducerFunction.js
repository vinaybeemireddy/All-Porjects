export const reducerFunction = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.payload;
    case "DECREASE":
      return state + action.payload;
    default:
      throw new Error("type is not defined");
  }
};
