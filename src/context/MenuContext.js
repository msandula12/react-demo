import React from 'react';

const MenuContext = React.createContext({
  isVisible: false,
  toggleVisibility: () => {}
});

export default MenuContext;
