import React from "react";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft/PersistentDrawerLeft";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <PersistentDrawerLeft />
        <Switch>
          <Route path="/guides/:guidePath"></Route>
          <Route path="/mantainers/:mantainersPath"></Route>
          <Route path="/features/:featuresPath"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
