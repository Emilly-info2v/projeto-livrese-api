import React from 'react'
import './ButtonInSection.css'
import { BiLogInCircle } from "react-icons/bi";

function ButtonInSection() {
  return (
    <div>
      <button className='in-section'>
        <b>ENTRAR</b><BiLogInCircle/>   
      </button>
    </div>
  )
}

export default ButtonInSection
