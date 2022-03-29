import { useState } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthProvider from "./components/context/AuthProvider";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivetRoute from "./components/PrivetRoute/PrivetRoute";
import Register from "./components/Register/Register";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />

          <div className="contentBody wrapper">
            <Switch>
              <PrivetRoute path="/services">
                <Services />
              </PrivetRoute>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/">
                <Home></Home>
              </Route>
            </Switch>
          </div>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
