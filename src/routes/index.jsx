import React, { lazy } from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from '../components/HomePage';
import Login from '../components/pages/Login';
import Cadastro from '../components/pages/Cadastro';
import CadastroLivro from '../components/pages/CadastroLivro';
import Perfil from '../components/pages/Perfil';
import Dashboard from '../components/pages/Dashboard';

import {PrivateRoute} from './privateRoute';

 export default function () {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/cadastro' element={<Cadastro />}/>
        <Route path='/user' element={<Perfil />}/>
        <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
        <Route path='/cadastro-livro' element={<CadastroLivro />}/>

      </Routes>
    </BrowserRouter>
  )
}
