import {useReducer, useContext} from 'react';
import {loginDetails, LoginContext} from './LoginContext';

const initialState = [
  {
    name: 'Victor',
    phone: '+254757464382'
  },
  {
    name: 'Gloria',
    phone: '+254703171770'
  }
];

const contactReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return state.concat([action.payload]);
    default:
      return state;
  }
}

const ContactInfo = () => {
  const [contactState, contactDispatcher] = useReducer(contactReducer, initialState);
  const loginInfo = useContext(LoginContext); 

  const handleClick = () => {

    contactDispatcher({
      type: 'ADD',
      payload: {
        name: 'Luna',
        phone: 'Daddy did not get me one'
      }
    });
    contactState.forEach(contact => console.log(contact));
  }


  return (
    <>
      Hello {loginInfo.name}! 
      You're currently {loginInfo.loggedIn? "Logged in." : "Not logged in."}
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

const App = () => {
  return (
    <LoginContext.Provider value={loginDetails}>
      <ContactInfo />
    </LoginContext.Provider>
  );
}

export default App;
