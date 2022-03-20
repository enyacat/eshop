import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { db, auth } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginState, setLoginState] = useState("");
  const [users, setUsers] = useState([]);
  const usersRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        // Signed in
        if (auth) {
          const user = userCredential.user;
          navigate("/");
        }

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const monitorAuthState = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // showApp();
        // showLoginState(user);

        // hideLoginError();
        // ...
      } else {
        // User is signed out
        // ...
        // showLoginForm();
        setLoginState("Please try again");
      }
    });
  };

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div className='login'>
      <Link to='/' style={{ textDecoration: "none" }}>
        <div className='login-logo'>
          <StorefrontIcon className='header-logoImage' fontSize='large' />
          <h2 className='login-logo-title'>eShop</h2>
          <p>.com</p>
        </div>
      </Link>
      <div className='login-section'>
        <div className='login-box'>
          <div className='login-box-inner padding-extra-large'>
            <h1 className='spacing-small'>Sign-In</h1>
            <label>username or email</label>
            <input
              type='email'
              maxlength='128'
              id='ap_email'
              name='email'
              tabindex='1'
              className='login-input-text login-span12 auth-autofocus auth-required-field'
            ></input>
            <label>password</label>
            <input type='password' />
            <input
              id='continue'
              tabindex='5'
              class='login-button-input'
              type='submit'
              arilogin-labelledby='continue-announce'
            ></input>
            <div class='login-divider-break'>
              <h5>New to eShop?</h5>
            </div>
            <span className='login-button-inner'>
              <a
                id='createAccountSubmit'
                tabindex='6'
                className='login-button-text'
              >
                Create your eShop account
              </a>
            </span>
            {users.map((user) => {
              return (
                <div>
                  <h1>email: {user.email}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
