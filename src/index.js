import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes ,Route} from 'react-router-dom';

import './index.css';
import App from './App';

import NavBar from '../src/components/navbar'
import SignUp from '../src/components/signUp';
import NotFound from '../src/components/notFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar/>
    <hr className="w-screen "/>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes> 
  </BrowserRouter>
);


