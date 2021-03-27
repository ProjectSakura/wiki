import React from "react";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft/PersistentDrawerLeft";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <PersistentDrawerLeft />
        <Switch>
          <Route path="/"></Route>
          <Route path="/:pathid"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
