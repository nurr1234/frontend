import axios from "axios";
import { config } from "../helpers/config";
import { getAuthHeader } from "./auth-header";

const baseURL = config.api.baseUrl;

export const getAllContactMessages = async (page=0, size=20, sort="date", type="ASC") => {
    const resp = await axios.get(`${baseURL}/contactMessages/getAll?page=${page}&size=${size}&sort=${sort}&type=${type}`, {
      headers: getAuthHeader(),
    });
    const data = await resp.data;
    return data;
  };


export const createMessage = async (payload) => {
    const resp = await axios.post(`${baseURL}/contactMessages/save`, payload)
    const data = await resp.data;
    return data;
}


  