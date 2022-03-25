import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Index";
import LoginPage from "./Pages/LoginPage/Index";
import RegisterPage from "./Pages/RegisterPage/Index";
import { ProtectedLogin, ProtectedRoutes } from "./utils/Auth/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<Dashboard />} />
      </Route>
      <Route element={<ProtectedLogin />}>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
