// Fichero src/index.js (código nuevo)

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Instructions from './routes/Instructions';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/instructions' element={<Instructions />} />
        <Route path='/options' />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
