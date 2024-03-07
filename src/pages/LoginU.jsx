import React, { useState ,useEffect} from 'react';
import axios from 'axios';

const LoginU = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    
    console.log('Login attempt completed.',errorMessage);

    
    
  },[]);

  const login = async (data) => {
    try {
      const response = await axios.post('http://localhost:3500/login', data, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      // Manejar la respuesta exitosa
      if (response.status === 200) {
        // Guardar el token de acceso en el almacenamiento local
        localStorage.setItem('accessToken', response.data.token);
        // Redirigir al usuario a la página de inicio
        window.location.href = '/userlist';
      }
  
    } catch (error) {
     
      setErrorMessage('Usuario o contraseña incorrectos.');
    }
  
    
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      "Email": email,
      "Password": password
    };

    login(data);
   
  };

  return (
    <div className="modal">
    <div className="modal-content">
        <div>
          <h1>Iniciar sesión</h1>
        </div>

        <form  onSubmit={handleSubmit}>
        <label>Correo Electroníco</label>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Iniciar sesión</button>
          <a href={`/register`}> <button className="btn-register">Registrate</button></a>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginU;