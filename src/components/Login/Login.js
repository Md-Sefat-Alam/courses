import React from "react";
import { Link } from "react-router-dom";
import ContentHeading from "../ContentHeading/ContentHeading";
import GoogleSignInBtn from "../GoogleSignInBtn/GoogleSignInBtn";

const Login = () => {
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="w-2/5">
        <ContentHeading text={"Login"} />
        <form>
          <div className="py-8">
            <p>
              Email:{" "}
              <input
                className="border w-full px-2 py-1 rounded"
                type="email"
                name=""
                id=""
              />
            </p>
            <p>
              Password:{" "}
              <input
                className="border w-full px-2 py-1 rounded"
                type="password"
                name=""
                id=""
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
          <GoogleSignInBtn />
        </form>
      </div>
    </div>
  );
};

export default Login;
