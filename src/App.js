import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Contact from './views/Contact';
import Home from './views/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
