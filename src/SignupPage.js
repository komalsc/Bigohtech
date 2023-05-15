import React from 'react';
import './signup.css';

function SignupPage() {
  return (
    <div className="signup-page">
      <h1>Sign up for our service</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignupPage;
