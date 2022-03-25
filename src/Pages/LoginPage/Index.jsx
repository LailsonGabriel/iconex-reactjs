import { useState } from "react";
import InputReusable from "../../Components/Input/Index";

function LoginPage() {
  const [loginInfos, setLoginInfos] = useState({ email: "", password: "" });

  return (
    <div>
      <InputReusable placeholder='Email' />
      <InputReusable placeholder='Senha' />
    </div>
  );
}

export default LoginPage;
