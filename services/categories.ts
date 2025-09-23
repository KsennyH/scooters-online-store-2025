import { Category } from "@prisma/client";
import { axiosInstance } from "./axios"

export const categories = async ():Promise<Category[]> => {
    const {data} = await axiosInstance.get('/categories');
    return data;
}