import { useState } from "react";
import { Link } from "react-router-dom";
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
    await login(loginType, { email, password });
    window.location.replace("/");
  };

  return (
    <div>
      <UserOrCompany setState={setLoginType} />
      <InputReusable
        type='text'
        placeholder='Email'
        onChange={handleLogin}
        name='email'
        value={loginInfos.email}
      />
      <InputReusable
        type='password'
        placeholder='Senha'
        onChange={handleLogin}
        name='password'
        value={loginInfos.password}
      />
      <ButtonReusable type='button' onClick={submitLogin}>
        teste
      </ButtonReusable>
      <div>
        <Link to='/register'>Não tem cadastro? Clique aqui</Link>
      </div>
    </div>
  );
}

export default LoginPage;
