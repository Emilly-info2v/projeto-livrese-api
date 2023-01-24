import React from 'react'
import './Perfil.css'
import {Link} from 'react-router-dom'
import Logo from'./../imgs/logo-livrese.jpeg'
import Azul from'./../imgs/perfil.png'
import Edit from'./../imgs/edit.png'
import Config from'./../imgs/config.png'
import User from'./../imgs/perfil-edit.png'
import User2 from'./../imgs/user-perfil2.png'
import {HiUserCircle} from 'react-icons/hi'
import {AiFillHome} from 'react-icons/ai'
import { ImExit } from "react-icons/im";

function Perfil() {
  return (
    <>
        <section>
        <nav>
        <a href="#section-home"><img className="baby" src={Logo} alt='livre -se'/></a> 
        
        <div className="nav-limks"> 
          <ul className="navig"> 
            <a href="#"><li className="nav-itens"><HiUserCircle color='#F58037'fontSize="3.5rem"/></li></a>
            <Link to='/dashboard'><li className="nav-itens"><AiFillHome color='#F58037'fontSize="3rem"/></li></Link>
            <Link to="/"><li className="nav-itens"><ImExit color='#002D70' fontSize="2.7rem"/></li></Link>
          </ul>
        </div>
      </nav>
        <div className='perfil-fundo'>
            <div className='perfil'>
                <img src={Azul} alt=''/>
                <div className='topo'>
                    <p>Seu Perfil</p>
                    <div className='topo-2'>
                        <div className='items-topo'><img src={Edit}/></div>
                        <div className='items-topo'><img src={Config}/></div>
                    </div>
                    
                </div>
            </div>
            <div className='user-perfil'><img src={User} alt=''/></div>
            <div className='user-perfil2'><img src={User2} alt="" /></div>
        </div>
</section>
    </>
  )
}

export default Perfil
