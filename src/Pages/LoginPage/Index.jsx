import { useState } from "react";
import InputReusable from "../../Components/Input/Index";
import setInputState from "../../utils/setInputState";

function LoginPage() {
  const [loginInfos, setLoginInfos] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    setInputState(e, loginInfos, setLoginInfos);
  };

  return (
    <div>
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
    </div>
  );
}

export default LoginPage;
