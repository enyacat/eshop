import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Alert } from '@mui/material';
import { useUserAuth } from '../store/StateProvider';

export default function Login() {
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [error, setError] = useState('');
  const { logIn } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(loginEmail, loginPassword);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='login'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div className='login-logo'>
          <StorefrontIcon className='header-logoImage' fontSize='large' />
          <h2 className='login-logo-title'>eShop</h2>
          <p>.com</p>
        </div>
      </Link>

      <div className='login-box'>
        <div className='login-box-inner padding-extra-large'>
          <h1 className='spacing-small'>Sign-In</h1>
          {error && (
            <Alert variant='outlined' severity='error'>
              {error}
            </Alert>
          )}
          <form className='login-form' onSubmit={handleSubmit}>
            <label>username or email</label>
            <input
              type='email'
              maxlength='128'
              className='login-input-text'
              onChange={(e) => setLoginEmail(e.target.value)}
            ></input>
            <label>password</label>
            <input
              type='password'
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button className='login-button-inner'>Submit</button>
          </form>
          <div class='login-divider-break'>
            <h5>New to eShop?</h5>
          </div>
          <span className='login-button-inner'>
            <Link
              to='/register'
              style={{ textDecoration: 'none' }}
              className='login-button-text'
            >
              Create your eShop account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
