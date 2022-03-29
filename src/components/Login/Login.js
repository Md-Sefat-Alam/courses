import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContentHeading from "../ContentHeading/ContentHeading";
import initializeAuthentication from "../Firebase/firebase.init";
import GoogleSignInBtn from "../GoogleSignInBtn/GoogleSignInBtn";

const Login = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState({});
  console.log(user);

  const handleInputData = (type, e) => {
    switch (type) {
      case "password":
        const changePassword = { ...inputData };
        changePassword.password = e.target.value;
        setInputData(changePassword);
        break;
      case "email":
        const changeEmail = { ...inputData };
        changeEmail.email = e.target.value;
        setInputData(changeEmail);
        break;

      default:
        break;
    }
  };
  console.log(inputData);
  const handleLogin = (e) => {
    e.preventDefault();
    initializeAuthentication();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, inputData.email, inputData.password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="w-2/5">
        <ContentHeading text={"Login"} />
        <form onSubmit={handleLogin}>
          <div className="py-8">
            <p>
              <span className="text-gray-500 text-sm">Email:</span>{" "}
              <input
                className="border w-full px-2 py-1 rounded"
                type="email"
                name=""
                id="loginEmail"
                onBlur={(e) => handleInputData("email", e)}
                required
              />
            </p>
            <p>
              <span className="text-gray-500 text-sm">Password:</span>{" "}
              <input
                className="border w-full px-2 py-1 rounded"
                type="password"
                name=""
                id="loginPassword"
                onBlur={(e) => handleInputData("password", e)}
                required
              />
            </p>

            <div className="flex justify-between items-center py-5">
              <button className="border px-3 py-1 rounded">Login</button>
              <p>
                No account?{" "}
                <Link to="/register" className="text-red-600 cursor-pointer">
                  regester now
                </Link>
              </p>
            </div>
          </div>
          <GoogleSignInBtn setUser={setUser} />
        </form>
      </div>
    </div>
  );
};

export default Login;
