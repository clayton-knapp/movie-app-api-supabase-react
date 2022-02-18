import React from 'react';
import { useState } from 'react';
import { signUpUser, signInUser } from '../services/fetch-utils';

export default function AuthPage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignInSubmit(e) {
    e.preventDefault();
    const user = await signInUser(email, password);
    setUser(user);
  }

  async function handleSignUpClick() {
    const user = await signUpUser(email, password);
    setUser(user);
  }

  return (
    <div className='sign-in-page'>
      <h3>Sign Up/Sign In</h3>
      <div>
        <form action="" className='sign-in-form'
          onSubmit={handleSignInSubmit}
        >
          <label>
            Email: 
            <input required type='email'
              onChange={(e)=>setEmail(e.target.value)}
            ></input>
          </label>
          <label>
            Password: 
            <input required type='password'
              onChange={(e)=>setPassword(e.target.value)}
            ></input>
          </label>
          <button>Sign-In</button>
          <button
            onClick={handleSignUpClick}
          >Sign-Up</button>
        </form>
      </div>
    </div>
  );
}
