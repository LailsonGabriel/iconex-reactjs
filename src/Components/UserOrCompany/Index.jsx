import { useContext } from "react";
import { Form } from "react-bootstrap";
import myContext from "../../Context/MyContext";

function UserOrCompany() {
  const { setUserType } = useContext(myContext);

  const handleCheckbox = (e) => {
    setUserType(e.target.defaultValue);
  };

  return (
    <div className='d-flex w-50 p-3 flex-column'>
      <div>Selecione sua categoria</div>
      <label
        htmlFor='one'
        onChange={(e) => handleCheckbox(e)}
        className='d-flex'
      >
        Usuário
        <Form.Check type='radio' name='one' value='user' />
        Companhia
        <Form.Check type='radio' name='one' value='company' />
      </label>
    </div>
  );
}

export default UserOrCompany;
