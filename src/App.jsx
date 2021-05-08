import { useState, useReducer } from 'react';

// Store object
const peopleStore = [
  { name: "Adam", wallet: 10, alive: true, lifeCount: 0 },
  { name: "Eve", wallet: 10, alive: true, lifeCount: 0 },
];

// Reducer
const peopleReducer = (state = peopleStore, action) => {
  switch (action.type) {
    case 'CREATE': 
      return state.concat({
        name: action.payload,
        wallet: 10,
        alive: true,
        lifeCount: 0
      });
    case 'KILL': 
      return state.map((person => {
        if (person.name === action.payload && person.alive) {
          person.alive = false;
          console.log(`${person.name} has just been killed!`);
        }
        return person;
      }));
    case 'REVIVE': 
      return state.map((person => {
        if (person.name === action.payload && !person.alive && person.lifeCount > 0) {
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
  const [name, setName] = useState('');
  const [peopleState, peopleDispatcher] = useReducer(peopleReducer, peopleStore);

  const handleNameInput = (event) => {
    setName(event.target.value);
  }

  const handleCreate = () => {
    if (name.length === 0) {
      return;
    }
    peopleDispatcher({
      type: 'CREATE',
      payload: name
    });
  }

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
              Name: <span style={{ fontWeight : 'bold' }}>{person.name}</span>, 
              status: <span style={{ fontWeight : 'bold' }}>{person.alive ? "ALIVE" : 
                (person.lifeCount === 0 && person.wallet === 0 ? "COMPLETELY DEAD!" : "DEAD")}</span>, 
              Life Count: <span style={{ fontWeight : 'bold' }}>{person.lifeCount}</span>, 
              Wallet: <span style={{ fontWeight : 'bold' }}>{person.wallet}</span>
              <button
                style={
                  {
                    marginLeft: "10px"
                  }
                }
                onClick={() => handleKill(person.name)}
                disabled={!person.alive}
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
                disabled={person.alive || person.lifeCount === 0}
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
                disabled={person.wallet === 0}
              >
                Buy life
              </button>
            </li>
          ))
        }
      </ul>      
      <br />
      <input type="text" value={name} onChange={handleNameInput} />
      <button onClick={handleCreate} disabled={name.length === 0}>Create</button>
    </div>
  );
}

const App = () => {
  return <People />
}

export default App;
