import baseURL from "../services/baseURL";
import axios from "axios";
import { encryptReq } from "./EncryptionReq";
import { decryptReq } from "./DecryptionReq";

export const makeApiCall = async (path, method, data = {}) => {
  try {
    const token = localStorage.getItem("token");
    const encrydata = encryptReq(data);


    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const config = {
      method: method.toLowerCase(),
      url: `${baseURL + path}`,
      headers: headers,
      ...(method.toLowerCase() === "get" ? { params: data } : { data: {data: encrydata} }),
    };
    const response = await axios(config);
    const decrydata = decryptReq(response.data.data);

    return decrydata;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
