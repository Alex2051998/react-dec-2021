import axios from "axios";

import baseURL from "../const/urls";

const axiosService = axios.create({baseURL});

export {
    axiosService
};