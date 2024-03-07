import React from "react";
import image from '../../public/images/Logo.png'

export default function Home() {
  return (
    <>
      <div className="App">
      <header className="App-header">
        <h1>PcIntegrum</h1>
        <img src={image} alt="PcIntegrum" />
      </header>
      <div className="container">
     
      <a href={`/login`}>
        <button className="btn-login">Iniciar sesión</button>
        </a>
        <a href={`/register`}><button className="btn-register">Registrarse</button>
        </a>
      </div>
    </div>
    </>
  );
}