import React from "react";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft/PersistentDrawerLeft";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <PersistentDrawerLeft />
        <Switch>
          <Route path="/:pathid"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
