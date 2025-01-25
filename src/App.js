import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [firstName, setFname] = useState();
  const [lastName, setLname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

   const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      password
    }
    
    const url = "http://127.0.0.1:5000/create_user"
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    const response = await fetch(url, options)
    if (response.status !== 201 && response.status !== 200) {
      const data = await response.json()
      alert(data.message)
    }

    
  }

  return (
    <form class="sign-up-form" onSubmit={onSubmit}>
      <div class="heading">
          <h1>Sign Up</h1>
        </div>
      <label class="fname-field">First Name<br />
        <input 
        type="text"
        required
        placeholder="John"
        onChange={(e) => setFname(e.target.value)}
        />
      </label><br />
      <label class="lname-field">Last Name<br />
        <input 
        type="text"
        required
        placeholder="Doe"
        onChange={(e) => setLname(e.target.value)}
        />
      </label><br />
      <label class="email-field">Email<br />
        <input 
        type="text"
        required
        placeholder="jdoe@example.com"
        onChange={(e) => setEmail(e.target.value)}
        />
      </label><br />
      <label class="password-field">Password<br />
        <input 
        type="password"
        required
        onChange={(e) => setPassword(e.target.value)}
        />
      </label><br />
      <button class="submit-button" >Sign Up</button>
    </form>
    
  );
}

export default App;
