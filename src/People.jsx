import { useReducer } from 'react';

// Store object
const peopleStore = [
  { name: "Jay", alive: true },
  { name: "Kailie", alive: true },
  { name: "John", alive: true },
  { name: "Mia", alive: true },
];

// Reducer
const peopleReducer = (state = peopleStore, action) => {
  switch (action.type) {
    case 'KILL': 
      return state.map((person => {
        if (person.name === action.payload) {
          person.alive = false;
          console.log(`${person.name} has just been killed!`);
        }
        return person;
      }));
    case 'REVIVE': 
      return state.map((person => {
        if (person.name === action.payload) {
          person.alive = true;
          console.log(`${person.name} has just been revived!`);
        }
        return person;
      }));
    default: return state;
  }
}

const People = () => {
  const [peopleState, peopleDispatcher] = useReducer(peopleReducer, peopleStore);

  const handleKill = (name) => {
    peopleDispatcher({
      type: 'KILL',
      payload: name 
    });
  }

  const handleRevive = (name) => {
    peopleDispatcher({
      type: 'REVIVE',
      payload: name 
    });
  }

  return (
    <div>
      <ul
        style={
          {
            listStyle: "none"
          }
        }
      >
        {
          peopleState.map(person => (
            <li key={person.name}>
              Name: {person.name}, status: {person.alive ? "ALIVE" : "DEAD!"}
              <button
                style={
                  {
                    marginLeft: "10px"
                  }
                }
                onClick={() => handleKill(person.name)}
              >
                Kill
              </button>
              <button
                style={
                  {
                    marginLeft: "10px"
                  }
                }
                onClick={() => handleRevive(person.name)}
              >
                Revive
              </button>
            </li>
          ))
        }
      </ul>      
    </div>
  );
}

const App = () => {
  return <People />
}

export default App;
