import './User.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart } from '../redux/actions';

const User = () => {
  // const { allProduct } = useSelector((state) => state.allProduct);
  // console.log(allProduct);
  const [allProduct, setallProduct] = useState([]);
  useEffect(() => {
    const allProductapi = () => {
      fetch("http://localhost:5000/allProducts")
        .then(response => response.json())
        .then(data => { setallProduct(data) })
    }
    allProductapi();
  }, []
  )

  const dispatch=useDispatch();

  const sendtocart=(e)=>{
     dispatch(addToCart(e))
  }

 
  return (
    <>
     <div className='cardmain'>
      {allProduct.map((e) => (


          <div className="card" style={{ width: "20rem" }}>
            <img className="card-img-top" src={e.image} alt="image" style={{ height: "18rem" }} />
            <div className="card-body">
              <h5 className="card-title">{e.title}</h5>
              <p className="card-text">Price: {e.price}$</p>
              <button className="btn btn-primary" style={{ width: "100%" }} onClick={()=>sendtocart(e)} >ADD TO CART</button>
            </div>
          </div>
         
      ))}
       </div> 
    </>
  )
};

export default User;
