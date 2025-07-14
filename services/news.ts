import { News } from "@prisma/client";
import { axiosInstance } from "./axios"

export const news = async ():Promise<News[]> => {
    const {data} = await axiosInstance.get('/news');
    return data;
}