import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft/PersistentDrawerLeft";

function App() {
  return (
    <Router basename="/wiki">
      <div className="App">
        <PersistentDrawerLeft />
        <Switch>
          <Route path="/wiki/:pathid" />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
