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
      <article className='Card'>
      <header className='Card-header'>
        {/* <img
          className='Card-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`}
        /> */}
        <div className='Card-info'>
        <span className='Card-label'><strong>Nombre</strong></span>
          <span className='Card-infoUserName'>{name}</span>
          <span className='Card-label'><strong>Apellido</strong></span>
          <span className='Card-infoUserName'>{lastName}</span>
          <span className='Card-label'><strong>Direccíon</strong></span>
          <span className='Card-infoUserName'>{address}</span>
        </div>
      </header>

      
      
     </article>
  
    );
  };

  return (
    <div>
      <h2>Usuarios Registrados</h2>
      {userData.length > 0 ? (
        userData.map((user) => (
          <UserData key={user.id} name={user.Name} lastName={user.Lastname} address={user.Address} />
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};
  

export default MyComponent;
