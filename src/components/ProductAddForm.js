import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../redux/actions";

const ProductAddForm = ({ hideForm }) => {
  const [data, setData] = useState({ title: "", price: 0, image: null ,qty:0});

  const dispatch = useDispatch();

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleUpload = async (e) => {
    let g = e.target.files[0];
    const file = await convertBase64(g);
    setData({ ...data, image: file });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/allProducts", data)
      .then((response) => response.data)
      .then(() => {
        dispatch(getAllProducts());
      });
  };

  return (
    <div>
      <button onClick={() => hideForm(false)}> cancle</button>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input
          type="text"
          onChange={(e) => {
            setData((olv) => ({ ...olv, title: e.target.value }));
          }}
          name="title"
          placeholder="title"
        />
        <input
          type="number"
          onChange={(e) => {
            setData((olv) => ({ ...olv, price: e.target.value }));
          }}
          name="price"
          placeholder="price"
        />
        <input type="file" name="image" onChange={handleUpload} />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default ProductAddForm;
