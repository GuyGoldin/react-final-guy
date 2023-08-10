import axios from "axios";
import { serverUrl } from "../content/content.ts";

const login = async (body) => {
  return await axios.post(`${serverUrl}/auth/login`, body);
};
const register = async (body: object) => {
  return await axios.post(`${serverUrl}/auth/register`, body);
};

const authServices = { login, register };
export default authServices;
