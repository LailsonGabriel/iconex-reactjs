import { useState } from "react";
import myContext from "./MyContext";

function MyProvider({ children }) {
  const [userLogged, setUserLogged] = useState({});

  const reveal = {
    userLogged,
    setUserLogged,
  };

  return <myContext.Provider value={reveal}>{children}</myContext.Provider>;
}

export default MyProvider;
