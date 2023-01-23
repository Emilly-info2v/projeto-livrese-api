import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './CadastroLivro.css'
import {HiUserCircle} from 'react-icons/hi'
import Logo from'./../imgs/logo-livrese.jpeg'
import Anexa from'./../imgs/anexar.png'
import { ImExit } from "react-icons/im";
//import { useNavigate } from "react-router-dom";

// import api from '../api';
import Sidebar from '../Sidebar'

function CadastroLivro() {
  // const navigate = useNavigate();
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
       console.log(titulo);
        console.log(descricao);
        console.log(categoria);
      //api.post(`posts`,{text:text}).then(()=>navigate("/read"))
     }
  return (
    <>
    <nav>
        <a href="#section-home"><img className="baby" src={Logo} alt='livre -se'/></a> 
        
        <div className="nav-limks"> 
          <ul className="navig"> 
          <Link to='/user'><li className="nav-itens"><HiUserCircle fontSize="3.5rem"/></li></Link>
          <Link to="/"><li className="nav-itens"><ImExit color='#002D70' fontSize="2.7rem"/></li></Link>
          </ul>
        </div>
      </nav>

    <div className='desktop-grid'>    
      <Sidebar />
      <div className='container-cadLivro'>
        
            <h1 className='title-submit'>Cadastre seu livro</h1>
        <form className='cadastro-livro' onSubmit={ handleSubmit }>
             <div className='anexo-img'><img src={Anexa} alt=''/></div>

            <div className='info-livro'>
                <div className='box-input-label'>
                  <div className='labels'><label>Titulo do livro</label></div>
                  <input className='input-livro' type='text' onChange={(e) => setTitulo(e.target.value)}/>
                </div>

                <div className='categoria'>
                  <label className='labels'>Categoria</label>
                  <select onChange={(e) => setCategoria(e.target.value)}>
                    <option value="Categoria">Categoria</option>
                    <option value="biografia">biografia</option>
                    <option value="contos">contos</option>
                    <option value="ficção cientifica">ficção cientifica</option>
                    <option value="romance">romance</option>
                  </select>
                </div>

                <div className='box-input-label'>
                  <div className='labels'><label>Descrição</label></div>
                  <input className='input-livro' type='text' onChange={(e) => setDescricao(e.target.value)}/>
                </div>
                <div className='box-input-label'>
                  <div className='labels'><label>Foto</label></div>
                  <input className='input-livro' type='file' onChange={(e) => setTitulo(e.target.value)}/>
                </div>
                
                <button className='btn-submit' type='Submit'>Salvar</button>
            </div>    

        </form>

      </div>
    </div>
    </>

  )
}

export default CadastroLivro
