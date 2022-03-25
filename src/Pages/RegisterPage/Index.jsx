import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ButtonReusable from "../../Components/Button/Index";
import InputReusable from "../../Components/Input/Index";
import UserOrCompany from "../../Components/UserOrCompany/Index";
import myContext from "../../Context/MyContext";
import { register } from "../../services/auth";
import setInLocalStorage from "../../utils/setInLocalStorage";
import setInputState from "../../utils/setInputState";

function RegisterPage() {
  const { userType } = useContext(myContext);
  const [RegisterInfos, setRegisterInfos] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    setInputState(e, RegisterInfos, setRegisterInfos);
  };

  const submitRegister = async () => {
    const { email, password, name } = RegisterInfos;
    if (!userType) return window.alert("Selecione a forma de registro");
    const data = await register(userType, { name, email, password });
    setInLocalStorage("userLogged", data);
    setInLocalStorage("typeLogged", userType);
    window.location.reload();
  };

  return (
    <div>
      <UserOrCompany />
      <InputReusable
        type='text'
        placeholder='Nome'
        onChange={handleRegister}
        name='name'
        value={RegisterInfos.name}
      />
      <InputReusable
        type='text'
        placeholder='Email'
        onChange={handleRegister}
        name='email'
        value={RegisterInfos.email}
      />
      <InputReusable
        type='password'
        placeholder='Senha'
        onChange={handleRegister}
        name='password'
        value={RegisterInfos.password}
      />
      <ButtonReusable variant='primary' type='button' onClick={submitRegister}>
        Registrar
      </ButtonReusable>
      <div>
        <Link to='/login'>Volte para o login</Link>
      </div>
    </div>
  );
}

export default RegisterPage;
