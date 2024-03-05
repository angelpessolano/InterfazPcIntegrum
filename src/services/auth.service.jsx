import axios from "axios";
import config from "../config";

const API_URL = "http://localhost:4000/products";

const register = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      // const urlbase= import.meta.env.VITE_URL_BASE_BANKS;
      // const portpse= import.meta.env.VITE_PORT_BANKS_PSE;

      // const gpse=import.meta.env.VITE_LINK_PSE;
      const getUsers = await axios.get(API_URL);
      resolve(getUsers.data);
    } catch (error) {
      reject(error);
    }
  });
};
// const login = async (data) => {
//   const response = await axios.post(API_URL + 'auth/signin', data);
//   if (response.data.accessToken) {
//     localStorage.setItem('userlogin', btoa(JSON.stringify(response.data)));
//   }
//   return response.data;
// };

// const forgetPass = async (data) => {
//   const response = await axios.post(API_URL + 'auth/forgetpass', data);
//   return response.data;
// };

// const resetPassword = async (data) => {
//   const response = await axios.post(API_URL + 'auth/resetpassword', data);
//   return response.data;
// };

// const getUserCode = async (data) => {
//   const response = await axios.post(API_URL + 'auth/usercode', data);
//   return response.data;
// };

// const logout = async () => {
//   await localStorage.clear();
// };

// const getCurrentUser = () => {

//   if( localStorage.getItem("userlogin") !== null ) {
//     return JSON.parse(atob(localStorage.getItem("userlogin")));
//   } else {
//     return false;
//   }

// };

// const refreshToken = async (data) =>{
//   const response = await axios.post(API_URL + 'auth/refreshtoken', data);
//   return response.data;
// }

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  getUsers,
  // login,
  // logout,
  // getCurrentUser,
  // forgetPass,
  // getUserCode,
  // resetPassword,
  // refreshToken,
};
