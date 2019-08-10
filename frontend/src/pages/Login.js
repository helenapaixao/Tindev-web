import React, {useState} from 'react'
import '../pages/Login.css'

import api from '../services/api'

import logo from '../assets/logo.svg'

 export default function Login({history}) {

   const [username, setUsername ] = useState('');

  async function handleSubmit(e){
    e.preventDefault();

    //cadastrar o dev
    const response = await api.post('/devs', 
    {
      username,
    });

    const {_id} = response.data;
    history.push(`/dev/${_id}`)
  }
  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt='Tindev' />
        <input
          placeholder="Digite o seu usuario no Github"
          value={username}
          onChange={e => setUsername(e.target.value) }
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}


//component estado e propriedade