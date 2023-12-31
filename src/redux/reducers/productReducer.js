const producrReducer = (
  state = { allProduct: [], singleProduct: {} },
  action
) => {
  switch (action.type) {
    case "setAllProducts":
      return { ...state, allProduct: action.payload};
    default:
      return state;
  }
};

export default producrReducer;
