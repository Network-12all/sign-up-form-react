import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      console.log('Signing in with email:', email);
    } else {
      console.log('Creating account with email:', email);
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div className="App">
      <div className="form-container">
        <h2>{isSignIn ? 'Sign In' : 'Create Account'}</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{isSignIn ? 'Sign In' : 'Create Account'}</button>
        </form>
        <p onClick={toggleForm} className="toggle-link">
          {isSignIn ? 'Need to create an account?' : 'Already have an account?'}
        </p>
      </div>
    </div>
  );
}

export default App;
