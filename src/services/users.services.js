import {axiosService} from "./axios.services";
import {urls} from "../const/const";

const usersServices = {
    getAllUsers:() => axiosService.get(urls.users)
}

export {usersServices}