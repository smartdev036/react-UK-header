import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

import Vip from './screen/Vip';
import Plan from './screen/Plan';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/vip">
            <Vip />
          </Route>
          <Route path="/plan">
            <Plan />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
