import axios from "axios";
import { serverUrl } from "../content/content.ts";
import { headers } from "../utils/utils.ts";
const addProduct = async (productObj: {}) => {
  return axios.post(`${serverUrl}/product/addProduct`, productObj, headers)
}
const updateProduct = async (productId: string, updatedProduct: {}) => {
  return await axios.put(`${serverUrl}/product/updateProduct/${productId}`, updatedProduct, headers)
}
const deleteProduct = async (productId: string) => {
  return await axios.delete(`${serverUrl}/product/deleteProduct/${productId}`, headers)
}
const getCategoryList = async () => {
  return await axios.get(`${serverUrl}/product/getCategoryList`)
}
const getProductList = async () => {
  return await axios.get(`${serverUrl}/product`);
};

const productServices = { updateProduct, addProduct, deleteProduct, getCategoryList, getProductList };
export default productServices;
