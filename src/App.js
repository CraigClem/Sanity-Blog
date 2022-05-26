import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from '../src/Components/Header'
import AllPosts from './Components/AllPosts'
import SinglePost from './Components/SinglePost'

function App() {
  return (
    <div className='app-container'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route element={<AllPosts />} path='/' />
          <Route element={<SinglePost />} path='/:slug' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
