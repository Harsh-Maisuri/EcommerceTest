import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from 'react';
import './Slider.css';
import styled from "styled-components";
import { sliderItems } from "../Data";
import { useEffect,useState } from "react";

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;



const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const [jdata , setJdata]=useState([]);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    useEffect(
        ()=>{
            const sliderApi=() =>{
                fetch("http://localhost:5000/sliderItems")
                .then(res=>res.json())
                .then(data => {setJdata(data)})
            }
            sliderApi();
        },[]
    )
    console.log(jdata);
        return (
            <>
                <div className='container_slider'>
                    <Arrow direction="left" onClick={() => handleClick("left")}>
                        <ArrowLeftOutlined />
                    </Arrow>
                    <Wrapper slideIndex={slideIndex}>
                        {jdata.map((item) => (
                            <Slide bg={item.bg} key={item.id}>
                                <div className='ImgContainer'>
                                    <img src={item.img} />
                                </div>
                                <div className='InfoContainer'>
                                    <h1>{item.title}</h1>
                                    <p>{item.desc}</p>
                                    <button>SHOW NOW</button>
                                </div>
                            </Slide>
                        ))}
                    </Wrapper>
                    <Arrow direction="right" onClick={() => handleClick("right")}>
                        <ArrowRightOutlined />
                    </Arrow>
                </div>
            </>
        )
    }

    export default Slider