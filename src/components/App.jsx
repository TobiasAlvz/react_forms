import React, {useState} from 'react';

function App () {
  let [name, setName] = useState ('');

  function change (event) {
    setName (event.target.value);
  }
  return (
    <div className="container">
      <h1>{name}</h1>
      <input onChange={change} type="text" placeholder="Qual seu nome?" />
      <button>Submit</button>
    </div>
  );
}

export default App;
