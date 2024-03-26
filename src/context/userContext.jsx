// userContext.jsx
import React, { createContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => React.useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);

  // Other context state or functions can be added here

  return (
    <UserContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
