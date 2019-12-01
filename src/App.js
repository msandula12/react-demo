import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Contact from './views/Contact';
import Home from './views/Home';
import Menu from './views/Menu';

const App = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>

        {/* Pop-out menu */}
        {isMenuVisible && <Menu />}
      </Router>
    </>
  );
};

export default App;
