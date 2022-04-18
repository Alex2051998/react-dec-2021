import {axiosService} from "./axios.service";

import {urls} from "../constants";

const userService = {
    getAll:()=>axiosService.get(urls.users),
    getById:(id)=>axiosService.get(`${urls.users}/${id}`),
    getComentByPost:(id)=>axiosService.get(`${urls.users}/${id}/posts`),
}

export {userService}