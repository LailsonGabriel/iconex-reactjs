import { useState } from "react";
import ButtonReusable from "../../Components/Button/Index";
import InputReusable from "../../Components/Input/Index";
import UserOrCompany from "../../Components/UserOrCompany/Index";
import { login } from "../../services/auth";
import setInputState from "../../utils/setInputState";

function LoginPage() {
  const [loginType, setLoginType] = useState("");
  const [loginInfos, setLoginInfos] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    setInputState(e, loginInfos, setLoginInfos);
  };

  const submitLogin = async () => {
    const { email, password } = loginInfos;
    if (!loginType) return window.alert("Selecione a forma de login");
    await login("user", { email, password });
  };

  return (
    <div>
      <UserOrCompany setState={setLoginType} />
      <InputReusable
        placeholder='Email'
        onChange={handleLogin}
        name='email'
        value={loginInfos.email}
      />
      <InputReusable
        placeholder='Senha'
        onChange={handleLogin}
        name='password'
        value={loginInfos.password}
      />
      <ButtonReusable type='button' onClick={submitLogin}>
        teste
      </ButtonReusable>
    </div>
  );
}

export default LoginPage;
