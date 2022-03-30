import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import Course from './pages/Course/Course'
import Pay from './pages/Pay/Pay'

const element = (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
            <Route index element={<Home></Home>}></Route>
            <Route path='course' element={<Course></Course>}></Route>
            <Route path='pay' element={<Pay></Pay>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
)
ReactDOM.render(element, document.getElementById('root'))
