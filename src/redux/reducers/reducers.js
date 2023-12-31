const initialState = {
  allUser: [],
};

export const userdataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "postAllData":
      return {
        ...state,
        allUser: [...state.allUser, action.payload],
      };
    default:
      return state;
  }
};
