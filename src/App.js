import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Contact from './views/Contact';
import Home from './views/Home';
import Menu from './views/Menu';

import MenuContext from './context/MenuContext';

const App = () => {
  const [menu, setMenu] = useState(false);

  const toggleVisibility = () => {
    setMenu(!menu);
  };

  return (
    <MenuContext.Provider value={{ isVisible: menu, toggleVisibility }}>
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
        {menu && <Menu />}
      </Router>
    </MenuContext.Provider>
  );
};

export default App;
