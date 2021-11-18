export const reducer = (state = false, action) => {
  if (action.type == "toggle") {
    return !state;
  }
  return state;
};
