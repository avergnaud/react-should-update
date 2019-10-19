import React, { useState } from 'react';
import ListItem from './ListItem/ListItem';
import { AppProvider } from './AppProvider'
const uuidv4 = require('uuid/v4');

function App() {

  const [personsState, setPersonsState] = useState({
    shouldUpdate: false,
    persons: [
      { id: uuidv4(), check: false },
      { id: uuidv4(), check: false },
      { id: uuidv4(), check: false },
      { id: uuidv4(), check: false },
    ],
  });

  let changeCheck = (index) => {
    let persons = [...personsState.persons];
    persons[index].check = !persons[index].check;
    setPersonsState({ shouldUpdate: personsState.shouldUpdate, persons: persons });
  }

  let shuffleChecks = () => {
    let persons = [...personsState.persons];
    persons.forEach(person => {
      person.check = Math.random() > 0.7 ? !person.check : person.check;
    })
    setPersonsState({ shouldUpdate: personsState.shouldUpdate, persons: persons });
  }

  let toggleShouldUpdate = () => {
    let state = { ...personsState };
    state.shouldUpdate = !state.shouldUpdate;
    setPersonsState(state);
  }

  let persons = personsState.persons.map((person, index) =>
    <ListItem
      key={index}
      content={person.id}
      isFavourite={person.check}
      handleCheckClick={() => changeCheck(index)}
    />
  );

  return (
    <div className="container">
      <div className="row">
        <h1>react-should-update</h1>
      </div>
      <div className="row mb-1">
        <div className="col-sm-6">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={personsState.shouldUpdate}
              onChange={toggleShouldUpdate}
              id="defaultCheck1" />
            <label className="form-check-label" htmlFor="defaultCheck1">
              activate shouldComponentUpdate hook
            </label>
          </div>
        </div>
        <div className="col-sm-6">
          <button className="btn btn-primary" onClick={shuffleChecks}>Shuffle</button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <ul className="list-group">
            <AppProvider shouldUpdate={personsState.shouldUpdate}>
              {persons}
            </AppProvider>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
