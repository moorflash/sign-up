import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [fName, setFname] = useState();
  const [lName, setLname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function submit(e) {
    e.preventDefault();
    const user = {fName, lName, email, password};

    fetch('http://127.0.0.1:8000/user/')
    .then(() => {
      console.log(response => response.json())
    })

    /*fetch('http://127.0.0.1:8000/', {
      method: 'POST',
      mode: "no-cors",
      headers: { Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({
        "first_name": fName,
        "last_name": lName,
        "email": email,
        "password": password
      })

    }).then(() => {
      console.log('Successfully added')
    })
*/
  }

  return (
    <form class="sign-up-form" onSubmit={(e) => submit(e)}>
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
      <button class="submit-button" type="submit">Sign Up</button>
    </form>
    
  );
}

export default App;
