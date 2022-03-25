import { useContext } from "react";
import ButtonReusable from "../../Components/Button/Index";
import myContext from "../../Context/MyContext";
import { logout } from "../../services/auth";
import CompanyResults from "./Company/Index";
import UserResults from "./User/Index";

function Dashboard() {
  const style = { marginLeft: "10px" };

  const { userLogged, userType } = useContext(myContext);

  return (
    <div>
      <div>
        <ButtonReusable onClick={async () => await logout()}>
          Sair
        </ButtonReusable>
      </div>
      <div className='d-flex'>
        <h5 style={style}>Dados:</h5>
        <p style={style}>Nome: {userLogged.name}</p>
        <p style={style}>Email: {userLogged.email}</p>
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
