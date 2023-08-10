import axios from "axios";
import { serverUrl } from "../content/content.ts";

const contact = async (body: object) => {
  return await axios.post(`${serverUrl}/general/contact`, body);
};

const generalServices = { contact };
export default generalServices;
