import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from "../redux/actions/index";


const Carddetails = () => {

    const [data, setData] = useState([]);
    console.log(data);

    const { id } = useParams();
    console.log(id);

    const navigate = useNavigate();

    const dispatch = useDispatch();


    const getdata = useSelector((state) => state.cart.cartarray);
    console.log(getdata)


    const compare = () => {
        let comparedata = getdata.filter((e) => {
            return e.id == id
        });
        setData(comparedata);
    }



    const delet = (id) => {
        dispatch(removeFromCart(id))
        navigate("/user")

    }




    useEffect(() => {
        compare();
    }, [id])

    return (
        <>

            <div className="iteamsdetails" style={{ marginTop: "100px" }}>
                {
                    data.map((ele) => {
                        return (
                            <>
                                <div className="items_img">
                                    <img src={ele.image} alt="" style={{ height: "250px" }} />
                                </div>

                                <div className="details">
                                    <Table>
                                        <tr>
                                            <td>
                                                <p> <strong>Product</strong>  :{ele.title} </p>
                                                <p> <strong>Price</strong>  :{ele.price}</p>
                                                <p> <strong>Total</strong>  :₹  </p>

                                                <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                    {/* <span style={{ fontSize: 24 }} onClick={ele.qnty <= 1 ? () => dlt(ele.id) : () => remove(ele)}>-</span> */}
                                                    <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                                                    {/* <span style={{ fontSize: 24 }} onClick={() => send(ele)}>+</span> */}

                                                </div>

                                                <td>
                                                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => delet(ele.id)}></i>	</span></p>
                                                </td>
                                            </td>

                                        </tr>
                                    </Table>
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Carddetails