import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ContentHeading from "../ContentHeading/ContentHeading";
import initializeAuthentication from "../Firebase/firebase.init";
import GoogleSignInBtn from "../GoogleSignInBtn/GoogleSignInBtn";

const Register = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [user, setUser] = useState({});
  const history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();
    initializeAuthentication();
    // const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, inputData.email, inputData.password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        console.log(error.code);
        setUser({});
      });
  };
  useEffect(() => {
    user.accessToken && history.push("/login");
  }, [user]);

  const handleInputData = (type, e) => {
    switch (type) {
      case "name":
        const changeName = { ...inputData };
        changeName.name = e.target.value;
        setInputData(changeName);
        break;
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
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="w-2/5">
        <ContentHeading text={"register"} />
        <form onSubmit={handleRegister}>
          <div className="py-8">
            <p>
              <span className="text-gray-500 text-sm">Name:</span>{" "}
              <input
                className="border w-full px-2 py-1 rounded"
                type="text"
                name=""
                id="registerName"
                onBlur={(e) => handleInputData("name", e)}
                required
              />
            </p>
            <p>
              <span className="text-gray-500 text-sm">Email:</span>{" "}
              <input
                className="border w-full px-2 py-1 rounded"
                type="email"
                name=""
                id="registerEmail"
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
                id="registerPassword"
                onBlur={(e) => handleInputData("password", e)}
                required
              />
            </p>
            <div className="flex justify-between items-center py-5">
              <button className="border px-3 py-1 rounded">Register</button>
              <p>
                Have an account?{" "}
                <Link to="/login" className="text-red-600 cursor-pointer">
                  login now
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

export default Register;
