import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Register from './Register'
import { Routes, Route } from "react-router-dom";


const Home = () => {
  return (
<>
<Announcement/>
<Slider/>
</>
  )
}

export default Home