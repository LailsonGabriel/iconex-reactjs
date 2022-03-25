import { useContext } from "react";
import myContext from "../../Context/MyContext";

function UserOrCompany() {
  const { setUserType } = useContext(myContext);

  const handleCheckbox = (e) => {
    setUserType(e.target.defaultValue);
  };

  return (
    <div>
      <label htmlFor='one' onChange={(e) => handleCheckbox(e)}>
        Usuário
        <input type='radio' name='one' value='user' />
        Companhia
        <input type='radio' name='one' value='company' />
      </label>
    </div>
  );
}

export default UserOrCompany;
