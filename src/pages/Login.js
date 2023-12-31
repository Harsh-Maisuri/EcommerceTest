import styled from "styled-components";
// import {mobile} from "../responsive";
import "./Login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  color: black;
  font-weight: 1000;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [loginformData, setLoginFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeLogin = (e) => {
    setLoginFormData({
      ...loginformData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    axios
      .get("  http://localhost:5000/allUserData")
      .then((responses) => responses.data)
      .then((usersData) => {
        const user = usersData.find(
          (e) =>
            e.username === loginformData.username &&
            e.password === loginformData.password
        );

        if (user && user.username) {
          console.log("lskjflsdlkfjlskd");
          localStorage.setItem("userInfo", JSON.stringify(user));
          dispatch({ type: "loggedInUser", payload: user });

          if (user.role === "Admin") {
            navigate("/admin");
          }

          if (user.role === "User") {
            navigate("/user");
          }
        }
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            type="text"
            id="username"
            name="username"
            onChange={handleChangeLogin}
          />
          <Input
            placeholder="password"
            type="password"
            id="password"
            name="password"
            onChange={handleChangeLogin}
          />

          <Button onClick={handleSubmitLogin}>LOGIN</Button>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
