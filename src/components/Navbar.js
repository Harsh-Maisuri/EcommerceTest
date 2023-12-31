import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Menu from '@mui/material/Menu';
import Table from 'react-bootstrap/esm/Table';
import { removeFromCart } from "../redux/actions/index";

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.userProfile);
  const getdata = useSelector((state) => state.cart.cartarray);
  console.log(getdata)

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [hide, setHide] = useState(true);
  const [price, setPrice] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const logOut = () => {
    navigate("/");
  };

  const delet = (id) => {
    dispatch(removeFromCart(id))

  }
  const total = () => {
    let price = 0;
    getdata.map((el, k) => {
      price = el.price + price
    })
    setPrice(price);
  }
  useEffect(() => {
    total();

  }, [total])



  return (
    <>
      <div className="navbar_container">
        <div className="wrapper">
          <div className="left">
            <span className="language">EN</span>
            <div className="searchcontainer">
              <input></input>
              <Search />
            </div>
          </div>
          <div className="center">
            <Link to="/">
              <h1>ECOM</h1>
            </Link>
          </div>
          <div className="center" >
            {userInfo?.role === "Admin" ? "admin" : userInfo?.username}
          </div>
          <div className="right">
            <Link to="/register">
              <div className="menuitem">REGISTER</div>
            </Link>
            <Link to="/login">
              <div className="menuitem">SIGN IN</div>
            </Link>

            <div className="menuitem" onClick={logOut}>LOG OUT</div>

            <div className="menuitem">
              <Badge badgeContent={getdata.length} color="primary"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </div>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >

          {
            getdata.length ?
              <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                <Table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Product Name</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      getdata.map((e) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                  <img src={e.image} style={{ width: "5rem", height: "5rem" }} alt="" />
                                </NavLink>
                              </td>
                              <td>
                                <p>{e.title}</p>
                                <p>Price : ₹{e.price}</p>
                                <p>Quantity : {e.qty}</p>
                          
                              </td>

                              <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => delet(e.id)} >
                                <i className='fas fa-trash largetrash'></i>
                              </td>
                            </tr>
                          </>
                        )
                      })
                    }
                    <p className='text-center'>Total :₹ {price}</p>
                  </tbody>
                </Table>
              </div> :

              <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                <i className='fas fa-close smallclose'
                  onClick={handleClose}
                  style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                <p style={{ fontSize: 22 }}>Your carts is empty</p>
              </div>
          }
        </Menu>

      </div>
    </>
  );
};

export default Navbar;
