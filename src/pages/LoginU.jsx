import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { getUsers } from '../services/auth.service';


const LoginU = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const [datau,setDatau]=useState(null)

  

  const fetchData=async () =>{

    // try {
    //   const dataUsers =  await getUsers();
    //   console.log("DataUsers",dataUsers);
    //   setData(dataUsers);
      

    // } catch (error) {
    //   console.log(error);
    // }
  
    return axios.get("http://localhost:3500/users").then((response) =>{
      console.log("FETCH",response.data[0]);
      setDatau(response.data)}    )
  
  }
  useEffect(()=>{
    fetchData();
    
  },[])


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar email y contraseña
    console.log(email,password);
    console.log(datau);

    // Enviar datos a la API para iniciar sesión

    // Redirigir a la página principal

    // Ejemplo de error
    setErrorMessage('Email o contraseña incorrectos');
  };


  return (
    <div>
       <div className="login-page">
        <div><h1>Iniciar sesión</h1></div>
      
      <form className="login-form" onSubmit={handleSubmit}>
      {/* {data?<h1>SI</h1>:<h1>NO</h1>} */}
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Iniciar sesión</button>
        <a href={`/register`}>Registro</a>
        {/* <button >Registrarse</button> */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        
      </form>
    </div>
    </div>
  );
};

export default LoginU;