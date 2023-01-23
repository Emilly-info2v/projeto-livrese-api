import React,{useState} from 'react'
import { AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai'
import { BsFacebook } from "react-icons/bs";
// import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './../imgs/logo-livrese.jpeg'
import LogoWhite from './../imgs/logo-branca.png'
import './Cadastro.css'
import api from '../../services/api'
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tel, setTel] = useState('');
  const navigate = useNavigate();
  function handleSubmit() {
    api
      .post(`cadastro`,{nome:nome,sobrenome:sobrenome,email:email,senha:senha,tel:tel})
      .then(()=>navigate("/login"))
  }
  
  return (
    <>
      <div className='section'>
        <div className='fundo'>
        <nav><img className='img-logo1' src={Logo} /></nav>

        <div className='tela-login'>

          <div className='image'>
            <div className='logo-livrese'>
              <img src={LogoWhite} alt='livre'/>
            </div>
          </div>

          <div className='form'>
            <div className='form-fundo'>
                      <h5>Faça seu cadastro no Livre - se</h5>
              <div className='inputs-cadastre'>
                <input
                type='text'
                placeholder='Digite seu nome' onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className='inputs-cadastre'>
                <input
                type='text'
                placeholder='Digite seu sobrenome' onChange={(e) => setSobrenome(e.target.value)}
                />
              </div>
              <div className='inputs-cadastre'>
                <input
                type='text'
                placeholder='telefone' onChange={(e) => setTel(e.target.value)}
                />
              </div>
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
              <span>Já possui cadastro? <Link to='/login'>Entre com seu login</Link></span>
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

export default Cadastro