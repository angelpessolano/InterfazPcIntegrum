import React, { useState, useEffect } from "react";
import axios from "axios";

const RegisterU = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const sendData = async (data) => {
    try {
      const response = await axios.post("http://localhost:3500/users", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data);
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, lastname, email, address, password, cpassword);

    const data = {
      Name: name,
      Lastname: lastname,
      Address: address,
      Email: email,
      Password: password,
    };
    sendData(data);
    redirect("/login");

 
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Registro Usuario</h1>
        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input
            type="text"
            name="Name"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Apellido</label>
          <input
            type="text"
            name="Lastname"
            placeholder="Apellido"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
          <label>Direccíon</label>
          <input
            type="text"
            name="Address"
            placeholder="Dirección"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <label>Correo Electroníco</label>
          <input
            type="email"
            name="Email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Contraseña</label>
          <input
            type="password"
            name="Password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            name="Cpassword"
            placeholder="Confirmar Contraseña"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
          <div className="modal-actions">
            <button type="submit">Guardar Registro</button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default RegisterU;
