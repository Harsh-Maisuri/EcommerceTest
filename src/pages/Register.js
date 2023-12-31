import React from 'react'
import styled from "styled-components";
// import { mobile } from "../responsive";
import './Register.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postAllData } from '../redux/actions';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  color: black;
  font-weight: 1000;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 70px;
  margin-right:140px;
//   margin-bottom:50px;
`;



const Register = () => {

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  // const [radio, setRadio]=useState("");
  const [initformdata, setINITFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setINITFormData({ ...initformdata, [name]: value });
    console.log(initformdata)
  };

  const finaldata = async (e) => {
    
    dispatch(postAllData(initformdata))

    Navigate("/login");
  };

    return (
        
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" type="text" id="name" name='name'onChange={handleChange}/>
                    <Input placeholder="last name" type="text" id="lastname" name='lastname' onChange={handleChange} />
                    <Input placeholder="username" type="text" id="username" name='username' onChange={handleChange}/>
                    <Input placeholder="email" type="email" id="email" name='email' onChange={handleChange}/>
                    <Input placeholder="password" type="password" id="password" name='password' onChange={handleChange}/>

                    <div className="form-group mt-3 mb-4">
                        <div className="row">
                            <div className=""><label class="radio"> <input type="radio" name="role" value="Admin" onChange={handleChange}  /> <span>ADMIN</span></label></div>
                            <div className=""><label class="radio"> <input type="radio" name="role" value="User"  onChange={handleChange}  /> <span>USER</span> </label></div>
                        </div>
                    </div>

                    <Button type="button"onClick={finaldata}>CREATE</Button>

                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;
