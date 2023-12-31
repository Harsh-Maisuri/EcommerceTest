const initialstate ={
  cartarray:[]
}


const cartReducer = (state=initialstate, action) => {
  switch (action.type) {
    case "ADDTOCART":
      return{
        ...state,
         cartarray:[...state.cartarray,action.payload]
      };
      case "REMOVEFROMCART":
        const data = state.cartarray.filter((e)=>e.id !== action.payload)
      return{
        ...state,
        cartarray:data

        
      };
      case "ADJUSTQTY":
      return{
         
      };
      case "LOADCURRENTITEM":
      return{
         
      };
    default:
      return state;
  }
};

export default cartReducer;
