import React from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import useAuth from "../hooks/useAuth";

const GoogleSignInBtn = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const { signInUsingGoogle, setUser, setError } = useAuth();
  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.code);
      });
  };
  return (
    <div>
      <div
        onClick={handleGoogleSignIn}
        className="border px-3 py-1 text-center cursor-pointer rounded w-full font-bold bg-gray-50"
      >
        <img
          className="inline h-9"
          src="data:image/png;base64,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"
          alt=""
        />{" "}
        Sign In With Google
      </div>
    </div>
  );
};

export default GoogleSignInBtn;
