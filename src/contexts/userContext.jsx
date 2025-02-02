import { createContext, useState } from "react";

// eslint-disable-next-line react/prop-types
function UserContextProvider({ children }) {
  const [user, setUser] = useState({ name: "Emre" });
  const [darkMode, setDarkMode] = useState(true);
  const isLoggedUser = localStorage.getItem("token") ? true : false;

  function changeUser(newUser) {
    const user = { ...newUser };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", user.token);
    delete user.password;
    setUser(newUser);
  }

  return (
    <UserContext.Provider
      value={{ user, changeUser, isLoggedUser, darkMode, setDarkMode }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const UserContext = createContext();
export default UserContextProvider;
