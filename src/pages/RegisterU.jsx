import React, { useState, useEffect } from 'react';
import { redirect } from "react-router-dom"
import axios from 'axios'

const RegisterU = () => {
  const [name, setName] = useState('');
  const [lastname,setLastname] = useState('');
  const [address,setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const sendData = async (data) => {
    try {
     

      const response = await axios.post('http://localhost:3500/users', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
 




  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,lastname,email,address,password,cpassword);

    const data = {
        
        "Name": name,
        "Lastname": lastname,
        "Address": address,
        "Email": email,
        "Password":password

      }
    sendData(data);
    redirect("/login");

    // Validar nombre, email y contraseña

    // Enviar datos a la API para registrarse

    // Redirigir a la página de inicio de sesión
  };

  return (
    <div className='contenedor'>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Name"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
         <input
          type="text"
          name="Lastname"
          placeholder="Apellido"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
        <input
          type="text"
          name="Address"
          placeholder="Dirección"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="email"
          name="Email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="Password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="Cpassword"
          placeholder="Confirmar Contraseña"
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
        />
        <button type="submit">Guardar Registro</button>
      </form>
    </div>
  );
};

export default RegisterU;