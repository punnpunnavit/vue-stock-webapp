import httpClient from "@/services/httpClient";
import { server } from "@/services/constant";
import router from "../router";
import * as productApis from "@/services/api_product";

const isLoggedIn = () => {
  let token = localStorage.getItem(server.TOKEN_KEY);
  return token != null;
};

const login = async (values) => {
  console.log(values);
  let result = await httpClient.post(server.LOGIN_URL, values);

  console.log(result.data.result);
  if (result.data.result == "ok") {
    localStorage.setItem(server.USERNAME, values.username);
    localStorage.setItem(server.TOKEN_KEY, result.data.token);
    router.push("/stock");
    return true;
  } else {
    console.log("noooooooo haha");
    return false;
  }
};

const logoff = () => {
  localStorage.removeItem(server.TOKEN_KEY);
  router.push("/login").catch(() => {});
};

const register = async (values) => {
  let result = await httpClient.post(server.REGISTER_URL, values);
  if (result.data.result == "ok") {
    router.go(-1);
  } else {
    console.log("failed");
    alert(JSON.stringify(result));
  }
  console.log(values);
};

export default {
  isLoggedIn,
  login,
  logoff,
  register,
  ...productApis,
};
