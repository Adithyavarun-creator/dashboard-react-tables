const darkModeReducer = (state, action) => {
  if (action.type === "LIGHT") {
    return {
      darkMode: false,
    };
  }
  if (action.type === "DARK") {
    return {
      darkMode: true,
    };
  }
  if (action.type === "TOGGLE") {
    return {
      darkMode: !state.darkMode,
    };
  }
  return state;
};

export default darkModeReducer;
