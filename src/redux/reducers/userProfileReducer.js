

const userProfileInfoFromLocalStorage = JSON.parse(
  localStorage.getItem("userInfo")
);

const userProfileReducer = (
  state = { userInfo: userProfileInfoFromLocalStorage },
  action
) => {
  switch (action.type) {
    case "loggedInUser":
      return { ...state, userInfo: action.payload };

    default:
      return state;
  }
};

export default userProfileReducer;
