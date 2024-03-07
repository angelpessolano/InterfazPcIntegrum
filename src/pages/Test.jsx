import React from "react";


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nombre de la aplicación</h1>
        <img src="imagen.png" alt="Imagen relacionada con la aplicación" />
      </header>
      <div className="container">
        <button className="btn-login">Iniciar sesión</button>
        <button className="btn-register">Registrarse</button>
      </div>
    </div>
  );
};

export default App;