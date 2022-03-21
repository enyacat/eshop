import { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Alert } from '@mui/material';
import { db, auth } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useUserAuth } from '../store/StateProvider';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

export default function Register() {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [error, setError] = useState('');
  const { signUp } = useUserAuth();
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signUp(registerEmail, registerPassword);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
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
          <h1 className='spacing-small'>Register</h1>
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
              onChange={(e) => setRegisterEmail(e.target.value)}
            ></input>
            <label>password</label>
            <input
              type='password'
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <button className='login-button-inner'>Submit</button>
          </form>
          {user?.email}
          <button className='login-button-inner' onClick={logOut}>
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
