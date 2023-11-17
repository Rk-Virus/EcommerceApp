// context.js
import React, { createContext, useState } from 'react';

const userContext = createContext();

export const ContextProvider = ({ children }) => {

  // glabally available data in App.js
  const [user, setUser] = useState(null);
  const [jwtoken, setJwtoken] = useState("")
  const [locationCoords, setLocationCoords] = useState([])

  return (
    <userContext.Provider value={{ user, setUser, jwtoken, setJwtoken }}>
      {children}
    </userContext.Provider>
  );
};

export default userContext;
