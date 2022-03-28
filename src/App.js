import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <div className="contentBody">
          <Switch>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
