import {axiosService} from "./axios.services";
import {urls} from "../const/const";

export  const postsServices = {
    getAllPosts:() => axiosService.get(urls.posts),
    getByIdPosts:(id) => axiosService.get(`${urls.posts}?userId=${id}`)

}