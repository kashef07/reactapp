import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';



function Hello(){
  return<Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<MyApp/>}/>
        </Routes>
}


ReactDOM.render(<BrowserRouter><Hello/></BrowserRouter>,document.getElementById('root'));



