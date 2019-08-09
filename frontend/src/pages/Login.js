import React from 'react'
import logo from '../assets/logo.svg'
import '../pages/Login.css'

function Login(){
  return(
    <div className='login-container'>    
 
  <form>
  <img src={logo} alt='Tindev'/>
    <input
    placeholder="Digite o seu usuario no Github"/>
    <button type="submit">Enviar</button>
  </form>

    </div>

  );
}

export default Login