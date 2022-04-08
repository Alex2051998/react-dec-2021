import axios from "axios";

import baseURL from "../const/const";

export const axiosService = axios.create({ baseURL });
