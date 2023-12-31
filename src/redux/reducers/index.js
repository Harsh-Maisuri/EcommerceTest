import { userdataReducer } from "./reducers";
import { combineReducers } from "redux";
import producrReducer from "./productReducer";
import orderReducer from "./orderReducer";
import cartReducer from "./cartReducer";
import userProfileReducer from "./userProfileReducer";

const rootReducer = combineReducers({
  userData: userdataReducer,
  allProduct: producrReducer,
  allOrderReducer: orderReducer,
  cart: cartReducer,
  userProfile: userProfileReducer,
});

export default rootReducer;
