import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You have submitted ${name}, ${email}`);
  }


  return (
    <div className="App auth-wrapper">
      <div className='auth-inner'>
      <h3>React Registration Page</h3>
     <form>
        <div className='mb-3'>
          <label>Name
          <input className="form-control" type="text" value={name} onChange={e => setName(e.target.value)}></input>
          </label>
        </div>
        <div className='mb-3'>
          <label>Password
          <input className="form-control" type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
          </label>
        </div>
        <div className='mb-3'>
          <label>Email
          <input className="form-control" type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
          </label>
        </div>
     </form>
     <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
     </div>
    </div>
  );
}

export default App;
