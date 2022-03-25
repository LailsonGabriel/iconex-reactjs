import { useContext } from "react";
import ButtonReusable from "../../Components/Button/Index";
import myContext from "../../Context/MyContext";
import { logout } from "../../services/auth";
import CompanyResults from "./Company/Index";
import UserResults from "./User/Index";

function Dashboard() {
  const { userLogged, userType } = useContext(myContext);

  return (
    <div>
      <div>
        <ButtonReusable onClick={async () => await logout()}>
          Sair
        </ButtonReusable>
      </div>
      <div className='d-flex'>
        <h5 style={{ marginLeft: "10px" }}>Dados:</h5>
        <p style={{ marginLeft: "10px" }}>Nome: {userLogged.name}</p>
        <p style={{ marginLeft: "10px" }}>Email: {userLogged.email}</p>
      </div>
      <h1>Dashboard</h1>
      <div>
        {userType === "user" ? (
          <UserResults user={userLogged} />
        ) : (
          <CompanyResults user={userLogged} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
