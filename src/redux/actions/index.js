import axios from "axios";

export const postAllData = (signupdata) => async (dispatch) => {
  const res = await axios.post("http://localhost:5000/allUserData", signupdata);
  dispatch({ type: "postAllData", payload: res.data });
};

export const getAllProducts = () => async (dispatch) => {
  const res = await axios.get("http://localhost:5000/allProducts");
  dispatch({ type: "setAllProducts", payload: res.data });
};

export const addToCart = (item) =>{
  return {
    type : "ADDTOCART",
    payload:item
  
  }
};

export const removeFromCart=(id)=>{
  return{
    type:"REMOVEFROMCART",
    payload:id
    
  }
}


export const adjustQty =(itemID,value)=>{
  return{
    type:"ADJUSTQTY",
    payload:{
      id:itemID,
      qty:value
    }
  }
}

export const loadCurrentItem =(item) =>{
  return{
    type:" ",
    payload:item
  }
}