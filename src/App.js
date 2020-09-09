import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM naming convention used throughout the app
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
          {/* left off at 1:00:55 building the 2nd page with react router */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
