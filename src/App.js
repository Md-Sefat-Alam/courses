import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <div className="contentBody wrapper">
          <Switch>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
