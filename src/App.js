import React from "react";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft/PersistentDrawerLeft";
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router basename="/wiki">
      <div className="App">
        <PersistentDrawerLeft />
        <Switch>
          <Route path="/wiki/:pathid"></Route>
        </Switch>
      </div>
      <Footer/>
    </Router>

  );
}

export default App;
