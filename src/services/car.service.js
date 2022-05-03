import {axiosService} from "./axios.service";
import {urls} from "../constans";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (car) => axiosService.post(urls.cars, car),
    carById: (id) => axiosService.get(`${urls.cars}/${id}`),
    deleteCar: (id) => axiosService.delete(`${urls.cars}/${id}`),
    updateByIdCar: (id, car) => axiosService.put(`${urls.cars}/${id}`, car),
}

export {
    carService
}