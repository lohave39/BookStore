import React from 'react'

import Home from './home/Home'
import Course from './componenets/Course';
import{ Route, Routes } from "react-router-dom"
import Signup from './home/Signup';
import AboutUs from './home/AboutUs';
import Login from './componenets/Login';


function App() {
  return (
    <div>
      {/* <Home/>
      <Course/>
       */}
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/login' element={<Login/>}/>
       </Routes>

      
    </div>
  )
}

export default App
