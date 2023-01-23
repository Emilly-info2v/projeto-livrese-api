import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import Logo1 from './../imgs/logo-livrese.jpeg'
import Sidebar from '../Sidebar'
import {HiUserCircle} from 'react-icons/hi'
import Harry from './../imgs/harry.png' 
import Monica from './../imgs/monica.png' 
import Ingles from './../imgs/ingles.png' 
import Colorido from './../imgs/livro-meio.png' 
import { ImExit } from "react-icons/im";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import Destaque from './../imgs/photoDest.png' 
import auth from '../../services/auth';
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { handleLogout } = auth();
  const navigate = useNavigate();
  return (
      <>
      <nav>
        <a href="#section-home"><img className="baby" src={Logo1} alt='livre -se'/></a> 
        
        <div className="nav-limks"> 
          <ul className="navig"> 
            <Link to='/user'><li className="nav-itens"><HiUserCircle color='#002D70' fontSize="3.5rem"/></li></Link>
            <a onClick={(e) => {e.preventDefault();handleLogout();navigate("/login")}}><li className="nav-itens"><ImExit color='#002D70' fontSize="2.7rem"/></li></a>          </ul>
        </div>
      </nav>

        
      <div className='desktop-grid'>
        <Sidebar/>
        <div className='fundo-disp'>
          <div className="input-grou">
            <input type="text" className="input-pesquisa" placeholder='Pesquisar'/>
              <span><button className="btn-buscar">Buscar</button></span>

              <div className='categ'>
                <div className='title-categ'>Categoria</div>
                <ul className='list-categ'>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                  <a href="#"><il className="nav-itens"><div className='categ-1'>caixa 1</div></il></a>
                </ul>
              </div>
              <div className='book-disp'>
                <div className='title-disp'>Livros disponíveis</div>
                <div className='imgs-disp'>
                    <div className='list-disp disp-first'>
                      <img src={Harry} alt=''/>
                      <div className='disp-first'>
                        <p>Coraline</p>
                        <button>Reservar</button>
                      </div>
                    </div>

                    <div className='list-disp disp-second'>
                      <img src={Monica} alt=''/>
                      <div className='disp-second'>
                        <p>A conquista da Matemática 9</p>
                        <button>Reservar</button>
                      </div>
                    </div>

                    <div className='list-disp disp-tercy'>
                      <img src={Ingles} alt=''/>
                      <div className='disp-tercy'>
                        <p>Harry Potter e o cálice de fogo</p>
                        <button>Reservar</button>
                      </div>
                    </div>

                    <div className='list-disp disp-quart'>
                      <img src={Colorido} alt=''/>
                      <div className='disp-quart'>
                        <p>Dicionário Aurélio</p>
                        <button>Reservar</button>
                      </div>
                    </div>
                </div>
              </div>
          </div>

          <div className='chat'>
            <div className='informacao-livro1'>
              <div className='livro-arrow'>
                <img src={Destaque} alt=''/>
                <div className='setas'>
                  <BsFillArrowLeftCircleFill color='grey' fontSize='2rem'/>

                  <BsFillArrowRightCircleFill color='#002D70' fontSize='2rem'/>

                </div>                
                  <div className='icons2'>
                    <FaPhoneAlt className='icon-filho' color='grey' fontSize='2rem'/>
                  </div>
              </div>
              <div className='text-info-livro1'>
                <h2>PERCY JACKSON E O MAR DE MONSTROS</h2>
                <p>nossos heróis partem em uma arriscada e incrível viagem pelo Mar de Monstros, 
                  localizado nas coordenadas 30-31-75-12: uma referência ao Triângulo das Bermudas.
                  Lá, enfrentam seres fantásticos e muitos perigos e situações inusitadas, que 
                  põem à prova seu heroísmo e sua herança – quando Percy irá questionar se ser 
                  filho de Poseidon é uma honra ou uma terrível maldição.</p>
                  <button className='btn-reserve1'>Reservar</button>
              </div>
              <div className='mensage'>
                <img src={Chat}/>
              </div>
            </div>
          </div>
          <div className='historic'>
            <div className=''>Histórico</div>
            <div className='items-photo-hist'>
                  <div className='photo-his'></div>       
                  <div className='photo-his'></div>       
                  <div className='photo-his'></div>   
            </div>     
          </div>
        </div>
      </div>
      </>
  )
}

export default Dashboard
