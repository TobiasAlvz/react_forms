import React, {useState} from 'react';

function App () {
  const [inputName, setInputName] = useState ('');
  const [displayName, setDisplayName] = useState ('');

  function handleChange (event) { 
    setInputName (event.target.value);
  }

  function handleSubmit () {
    setDisplayName (inputName);
  }

  return (
    <div className="container">

      <h1>{displayName}</h1>

      <input
        onChange={handleChange}
        type="text"
        placeholder="Qual seu nome?"
      
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
