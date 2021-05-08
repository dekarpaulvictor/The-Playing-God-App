import { useReducer } from 'react';

// Store object
const peopleStore = [
  { name: "Jay", wallet: 10, alive: false, lifeCount: 0 },
  { name: "Kailie", wallet: 10, alive: false, lifeCount: 0 },
  { name: "John", wallet: 10, alive: false, lifeCount: 0 },
  { name: "Mia", wallet: 10, alive: false, lifeCount: 0 },
];

// Reducer
const peopleReducer = (state = peopleStore, action) => {
  switch (action.type) {
    case 'KILL': 
      return state.map((person => {
        if (person.name === action.payload && person.lifeCount > 0) {
          person.alive = false;
          console.log(`${person.name} has just been killed!`);
        }
        return person;
      }));
    case 'REVIVE': 
      return state.map((person => {
        if (person.name === action.payload && person.lifeCount > 0) {
          person.lifeCount = person.lifeCount - 1;
          person.alive = true;
          console.log(`${person.name} has just been revived!`);
        }
        return person;
      }));
    case 'BUYLIFE': 
      return state.map((person => {
        if (person.name === action.payload && person.wallet > 0) {
          person.wallet = person.wallet - 1;
          person.lifeCount = person.lifeCount + 1;
          console.log(`${person.name} has just bought 1 life!`);
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

  const handleBuyLife = (name) => {
    peopleDispatcher({
      type: 'BUYLIFE',
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
              Name: {person.name}, 
              status: {person.alive ? "ALIVE" : "DEAD!"}, 
              Life Count: {person.lifeCount}, 
              Wallet: {person.wallet}
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
              <button
                style={
                  {
                    marginLeft: "10px"
                  }
                }
                onClick={() => handleBuyLife(person.name)}
              >
                Buy life
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
