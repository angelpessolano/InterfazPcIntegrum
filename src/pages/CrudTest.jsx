import React, { useState, useEffect } from 'react';
import '../styles/crud.css'

const CrudApp = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setItems(data);
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
      setItems(items.filter((item) => item.Id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleEdit = (itemId) => {
    // Logic to handle edit functionality
    // You can navigate to a separate edit page or show a modal dialog
    // to edit the item's details
    console.log(`Editing item with ID: ${itemId}`);
  };

  return (
    <div>
      <h1>CRUD App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.Id}>
              <div>
                <strong>Name:</strong> {item.Name}
              </div>
              <div>
                <strong>Last Name:</strong> {item.Lastname}
              </div>
              <div>
                <strong>Address:</strong> {item.Address}
              </div>
              <button onClick={() => handleEdit(item.Id)}>Edit</button>
              <button onClick={() => handleDelete(item.Id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CrudApp;