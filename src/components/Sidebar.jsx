import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.css'
import Logo from './imgs/logo-livrese.jpeg'

function Sidebar() {
  return (
      <>
      <div className='sidebar'>

        <ul className=''>
            <li><img src={Logo} className='baby1' alt=''/></li>
            <NavLink to='/dashboard'>Livros Disponíveis</NavLink>
            <NavLink to='/cadastro-livro'>Cadastro de Livros</NavLink>
        </ul>
      </div>
      </>
  )
}

export default Sidebar
