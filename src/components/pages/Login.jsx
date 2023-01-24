import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Logo from'./../imgs/logo-livrese.jpeg'
import './Login.css'
import LogoWhite from './../imgs/logo-branca.png'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai'
import {HiUserCircle} from 'react-icons/hi'
import auth from '../../services/auth';

function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { authenticated, handleLogin } = auth();

  function handleSubmit() {
    handleLogin(email, senha);
  }

  return (
    <>
      {authenticated && <Navigate to="/dashboard" replace={true} />}
      <div className='section'>
        <div className='fundo'>
        <nav><img className='img-logo1' src={Logo} alt=""/></nav>

        <div className='tela-login'>

          <div className='image'>
            <div className='logo-livrese'>
              <img src={LogoWhite} alt='livre'/>
            </div>
          </div>

          <div className='form'>
            <div className='form-fundo'>
                      <div className='title-login'><h5>Entre com seu login</h5></div>

                <div><HiUserCircle color="#001d49" fontSize="10rem"/></div>
              <div className='inputs-cadastre'>
                <input
                type='text'
                placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='inputs-cadastre'>
                <input
                type='password'
                placeholder='Crie uma senha' onChange={(e) => setSenha(e.target.value)}
                />
              </div>
              <button className='btn-cadastre' type='Submit' onClick={handleSubmit}>Pronto</button>
              <span>Não possui cadastro? <Link to='/cadastro'>Faça o seu cadastro</Link></span>
            </div>
          </div>

        </div>
        <div className='footer-1'> 
          <div className='footer-item'>
            <div className='item-3-f'><BsFacebook color="white" fontSize="3.5rem"/></div>
            <div className='item-3-i'><AiFillInstagram color="white" fontSize="3.5rem"/></div>
            <div className='item-3-t'><AiFillTwitterCircle color="white" fontSize="3.5rem"/></div>
          </div>
          <div className='info-footer'>Info • Suporte</div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Login