import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import AllPosts from './Components/AllPosts'
import SinglePost from './Components/SinglePost'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Nav from './Components/Nav'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='container-fluid'>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' exact />
          <Route element={<AllPosts />} path='/blog' />
          <Route element={<Contact />} path='/contact' />
          <Route element={<SinglePost />} path='/:slug' />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;
