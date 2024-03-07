import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// {users.map((item) => (
//   <li key={item.Id}>
//     <div>
//       <div>
//         {" "}
//         <strong>Nombre:</strong>
//         {item.Name}
//       </div>
//       <div>
//         <strong>Apellido:</strong>
//         {item.Lastname}
//       </div>
//       <div>
//         {" "}
//         <strong>Direccion:</strong>
//         {item.Address}
//       </div>
//       <div>
//         {" "}
//         <strong>Email:</strong>
//         {item.Email}{" "}
//       </div>
//     </div>
//     <div>
//       <button onClick={() => handleEdit(item)}>Editar</button>
//       <button onClick={() => handleDelete(item.Id)}>Borrar</button>
//     </div>
//   </li>
// ))}

// Create Document Component
const MyDocument = ({ users }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        {users.map((item) => (
          <View style={styles.section} key={item.Id}>
            <Text>Nombre:</Text>
            <Text>{item.Name}</Text>
            <Text>Apellido:</Text>
            <Text>{item.Lastname}</Text>
            <Text>Direccion:</Text>
            <Text>{item.Address}</Text>
            <Text>Email:</Text>
            <Text>{item.Email}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default MyDocument