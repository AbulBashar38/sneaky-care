import React, { useContext, useState } from "react";
import loginImg from "../../image/login.jpg";
import "./login.css";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
const Login = () => {
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminLogin, setAdminLogin] = useState({});

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const handleGoogleLogin = (e) => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const newUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        setLoggedInUser(newUser);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });

    e.preventDefault();
  };
  const handleBlur = (e) => {
    const newAdmin = { ...adminLogin };
    newAdmin[e.target.name] = e.target.value;
    setAdminLogin(newAdmin);
  };
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(
      auth,
      adminLogin.email,
      adminLogin.password
    )
      .then((userCredential) => {
        var user = userCredential.user;
        const newUser = {
          name: "",
          email: user.email,
          photo: "",
        };
        setLoggedInUser(newUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="container">
      <div className="row loginContainer shadow-lg">
        <div className="col-md-7 my-auto p-5">
          <form>
            {showAdmin ? (
              <div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onBlur={handleBlur}
                  />
                  <div id="emailHelp" className="form-text">
                    adminemail123@gmail.com
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    onBlur={handleBlur}
                  />
                  <div id="emailHelp" className="form-text">
                    adminpassword123
                  </div>
                </div>
                <div className="text-center mb-5">
                  <button
                    onClick={handleAdminLogin}
                    className="btn btn-primary"
                  >
                    Admin login
                  </button>
                </div>
              </div>
            ) : (
              <p className="display-5 text-center">
                You have to login with Google
              </p>
            )}
            <div className="text-center">
              <button
                className="btn btn-custom btn-google"
                onClick={handleGoogleLogin}
              >
                <FontAwesomeIcon className="icon" icon={faGoogle} /> Login with
                Google
              </button>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                onChange={() => setShowAdmin(!showAdmin)}
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out if you are an Admin
              </label>
            </div>
          </form>
        </div>
        <div className="col-md-5">
          <img src={loginImg} alt="" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
};

export default Login;
