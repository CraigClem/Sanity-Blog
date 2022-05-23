import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AllPosts from './Components/AllPosts'
import SinglePost from './Components/SinglePost'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AllPosts />} path='/' exact />
        <Route element={<SinglePost />} path='/single' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
