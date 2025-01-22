import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [fName, setFname] = useState();
  const [lName, setLname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <form class="sign-up-form">
      <div class="heading">
          <h1>Sign Up</h1>
        </div>
      <label class="fname-field">First Name<br />
        <input 
        type="text"
        required
        placeholder="John"
        />
      </label><br />
      <label class="lname-field">Last Name<br />
        <input 
        type="text"
        required
        placeholder="Doe"
        />
      </label><br />
      <label class="email-field">Email<br />
        <input 
        type="text"
        required
        placeholder="jdoe@example.com"
        />
      </label><br />
      <label class="password-field">Password<br />
        <input 
        type="password"
        required
        />
      </label><br />
      <button class="submit-button" type="submit">Sign Up</button>
    </form>
    
  );
}

export default App;
