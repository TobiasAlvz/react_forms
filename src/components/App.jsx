import React, {useState} from 'react';

function App () {
  const [inputName, setInputName] = useState ('');
  const [displayName, setDisplayName] = useState ('');

  function handleChange (event) {
    setInputName (event.target.value);
  }

  function handleSubmit (event) {
    event.preventDefault ();
  
    setDisplayName (inputName);
  }

  return (
    <div className="container">

      <h1>{displayName}</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Qual seu nome?"
        />
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default App;
