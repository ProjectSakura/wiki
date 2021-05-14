import React from "react";
import { HashRouter as Router } from "react-router-dom";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft/PersistentDrawerLeft";

function App() {
  return (
    <Router>
      <div className="App">
        <PersistentDrawerLeft />
      </div>
    </Router>
  );
}

export default App;
