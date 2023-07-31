import React from 'react';
import Home from './Pages/home';
import Register from './Pages/create.js';
import Read from './Pages/Read.js';
import Update from './Pages/Update.js';
import Delete from './Pages/_delete.js';

import {Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Register/>}/>
        <Route path='/user' element={<Read/>}/>
        <Route path='/update' element={<Update/>}/>
        <Route path='/delete' element={<Delete/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </div>
  );
};

export default App;
