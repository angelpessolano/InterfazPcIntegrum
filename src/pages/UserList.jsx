import React, { useEffect, useState } from "react";
import "../styles/UserList.css";

const MyComponent = () => {
  const [userData, setUserData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3500/users"); 
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        
      }
    };

    fetchData();
  }, []);

  const UserData = ({ name, lastName, address }) => {
    return (
      <div>
        <p>
          <b>Nombre:</b> {name}
        </p>
        <p>
          <b>Apellido:</b> {lastName}
        </p>
        <p>
          <b>Dirección:</b> {address}
        </p>
      </div>
    );
  };

  return (
    <div>
      <h2>User Information</h2>
      {userData.length > 0 ? (
        userData.map((user) => (
          <UserData key={user.id || user.name} name={user.name} lastName={user.lastName} address={user.address} />
        ))
      ) : (
        <p>Loading data...</p> 
      )}
    </div>
  );
};

export default MyComponent;
