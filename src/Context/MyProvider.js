import { useEffect, useState } from "react";
import myContext from "./MyContext";

function MyProvider({ children }) {
  const [userLogged, setUserLogged] = useState({});
  const [userType, setUserType] = useState("");

  useEffect(() => {
    const getLocalUser = JSON.parse(localStorage.getItem("userLogged"));
    const getLocalType = JSON.parse(localStorage.getItem("typeLogged"));
    if (getLocalUser !== null && getLocalType !== null) {
      setUserLogged(getLocalUser);
      setUserType(getLocalType);
    }
  }, []);

  const reveal = {
    userLogged,
    setUserLogged,
    setUserType,
    userType,
  };

  return <myContext.Provider value={reveal}>{children}</myContext.Provider>;
}

export default MyProvider;
