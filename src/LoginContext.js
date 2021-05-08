import {createContext} from 'react';

export const loginDetails = {
  name: "Guest",
  authToken: "",
  loggedIn: false
}

export const LoginContext = createContext();

