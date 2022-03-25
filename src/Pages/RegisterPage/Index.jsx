import { useState } from "react";
import ButtonReusable from "../../Components/Button/Index";
import InputReusable from "../../Components/Input/Index";
import UserOrCompany from "../../Components/UserOrCompany/Index";
import { register } from "../../services/auth";
import setInputState from "../../utils/setInputState";

function RegisterPage() {
  const [RegisterType, setRegisterType] = useState("");
  const [RegisterInfos, setRegisterInfos] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    setInputState(e, RegisterInfos, setRegisterInfos);
  };

  const submitLogin = async () => {
    const { email, password, name } = RegisterInfos;
    if (!RegisterType) return window.alert("Selecione a forma de login");
    await register(RegisterType, { name, email, password });
    window.location.replace("/");
  };

  return (
    <div>
      <UserOrCompany setState={setRegisterType} />
      <InputReusable
        type='text'
        placeholder='Nome'
        onChange={handleLogin}
        name='name'
        value={RegisterInfos.name}
      />
      <InputReusable
        type='text'
        placeholder='Email'
        onChange={handleLogin}
        name='email'
        value={RegisterInfos.email}
      />
      <InputReusable
        type='password'
        placeholder='Senha'
        onChange={handleLogin}
        name='password'
        value={RegisterInfos.password}
      />
      <ButtonReusable type='button' onClick={submitLogin}>
        teste
      </ButtonReusable>
    </div>
  );
}

export default RegisterPage;
