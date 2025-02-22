import React from "react"
import Home from "./home/Home"
// import Course from "./components/Course"
import { Route, Routes } from "react-router-dom"
import Courses from "./courses/Courses"
import Signup from "./components/Signup"
// import Login from "./components/Login"

export default function App() {
  return (
    <>
      {/* <Home />
      <Course/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={<Signup />} />
        
      </Routes>

    </>
  )
}