import axios from "axios";
import keys from "../keys";

const clientAxios = axios.create({
  baseURL: keys.URL_BASE,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + keys.ACCESS_TOKEN,
  },
});

export default clientAxios;
