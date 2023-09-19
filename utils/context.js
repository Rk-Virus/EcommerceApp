// context.js
import React, { createContext, useState } from 'react';

const userContext = createContext();

export const ContextProvider = ({ children }) => {

  // glabally available data in App.js
  const [user, setUser] = useState(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default userContext;
