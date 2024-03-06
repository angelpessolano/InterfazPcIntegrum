import React, { useEffect, useState } from "react";

import "../styles/UserList.css";


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);  
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editedItem, setEditedItem] = useState({
    Name: '',
    Lastname: '',
    Address: '',
  });

  useEffect(() => {
    // Fetch the initial data from the API
    fetchData();
  }, []);

  const fetchData = async () => {
    
    try {
        const response = await fetch("http://localhost:3500/users");
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setUsers(data);
        setLoading(false);

      } catch (error) {
        console.error("Error fetching data:", error);

      }
  };

  const handleDelete = async (itemId) => {
    try {
      await fetch(`http://localhost:3500/users/${itemId}`, {
        method: 'DELETE',
      });
      // Remove the deleted item from the local state
      setUsers(users.filter((item) => item.Id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleEdit = (item) => {
    console.log("itemmm",item);
    setSelectedItem(item);
    setEditedItem({
      Name: item.Name,
      Lastname: item.Lastname,
      Address: item.Address,
      Email:item.Email
    });
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
    setSelectedItem(null);
    setEditedItem({
      Name: '',
      Lastname: '',
      Address: '',
      Email:''
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };
  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`http://localhost:3500/users/${selectedItem.Id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedItem),
      });
      if (response.ok) {
        // Update the item in the local state
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.Id === selectedItem.Id ? { ...user, ...editedItem } : user
          )
        );
        handleModalClose();
      } else {
        console.error('Error updating item:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };
  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {users.map((item) => (
            <li key={item.Id}>
              <div>
                <strong>Nombre:</strong> {item.Name}
              </div>
              <div>
                <strong>Apellido:</strong> {item.Lastname}
              </div>
              <div>
                <strong>Direccion:</strong> {item.Address}
              </div>
              <div>
                <strong>Email:</strong> {item.Email}
              </div>
              <button onClick={() => handleEdit(item)}>Editar</button>
              <button onClick={() => handleDelete(item.Id)}>Borrar</button>
            </li>
          ))}
        </ul>
      )}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Editar Usuario</h2>
            <label>Nombre</label>
            <input
              type="text"
              name="Name"
              value={editedItem.Name}
              onChange={handleInputChange}
            />
            <label>Apellido</label>
            <input
              type="text"
              name="Lastname"
              value={editedItem.Lastname}
              onChange={handleInputChange}
            />
            <label>Direccíon</label>
            <input
              type="text"
              name="Address"
              value={editedItem.Address}
              onChange={handleInputChange}
            />
            <label>Email</label>
            <input
              type="text"
              name="Email"
              value={editedItem.Email}
              
            />
            <div className="modal-actions">
              <button onClick={handleSaveChanges}>Guardar Cambios</button>
              <button onClick={handleModalClose}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

  

export default UserList;
