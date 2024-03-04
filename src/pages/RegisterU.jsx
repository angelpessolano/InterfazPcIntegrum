import React, { useState, useEffect } from 'react';


const RegisterU = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,email,password);

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
          name="name"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Guardar Registro</button>
      </form>
    </div>
  );
};

export default RegisterU;