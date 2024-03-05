import React, { useState } from 'react';
import axios from 'axios';

const LoginU = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const login = async (data) => {
    try {
      const response = await axios.post('http://localhost:3500/login', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
      setErrorMessage('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      "Email": email,
      "Password": password
    };

    login(data);
  };

  return (
    <div>
      <div className="login-page">
        <div>
          <h1>Iniciar sesión</h1>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
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
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginU;