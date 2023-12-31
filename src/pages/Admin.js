import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductAddForm from "../components/ProductAddForm";
import { getAllProducts } from "../redux/actions";

const Admin = () => {
  const [showForm, sethideForm] = useState(false);

  const dispatch = useDispatch();

  const { allProduct } = useSelector((state) => state.allProduct);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const deleteHandler = async (id) => {
    console.log(id)
    await axios.delete(`http://localhost:5000/allProducts/${id}`);

    dispatch(getAllProducts());
  };

  return (
    <div>
      {showForm ? (
        <ProductAddForm hideForm={sethideForm} />
      ) : (
        <button onClick={() => sethideForm(true)}>add Product</button>
      )}
      <div>
        <table>
          <thead>
            <th>name</th>
            <th>price</th>
            <th></th>
          </thead>
          <tbody>
            {allProduct?.map((e, index) => {
              return (
                <tr key={index}>
                  <td>{e.title}</td>
                  <td>{e.price}</td>
                  <td>
                    <button onClick={() => deleteHandler(e.id)}>delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
