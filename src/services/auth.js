import Cookies from "js-cookie";
import api from "./api";
const tokenCookie = Cookies.get("session");

const login = async (type, { email, password }) => {
  try {
    const {
      data: { token },
    } = await api.post(`auth/${type}/login`, { email, password });
    Cookies.set("session", token, { expires: 7 });
    api.defaults.headers.common["Authorization"] = `${token}`;
  } catch (err) {
    return { err };
  }
};

const logout = async () => {
  try {
    Cookies.remove("session");
    window.location.replace("/login");
  } catch (error) {
    throw error;
  }
};

if (tokenCookie) {
  api.defaults.headers.common["Authorization"] = `${tokenCookie}`;
}

const register = async (type, { name, email, password }) => {
  try {
    const {
      data: { token },
    } = await api.post(`/auth/${type}/register`, { name, email, password });
    Cookies.set("session", token, { expires: 7 });
    api.defaults.headers.common["Authorization"] = `${token}`;
  } catch (err) {
    return { err };
  }
};

export { login, logout, register };
