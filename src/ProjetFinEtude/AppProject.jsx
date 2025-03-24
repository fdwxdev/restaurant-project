import React from 'react'
import NavBar from './page/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Menu from './page/Menu'
import About from './page/abaout'

export default function AppProject() {
  return (
    <div>
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Login' element={<h1>login</h1>}/>

        <Route path='/*' element={<h1>page not fand</h1>}/>
      </Routes>
    </div>
  )
}
