import { Product } from "@prisma/client"
import { axiosInstance } from "./axios"

export const search = async (query:string): Promise<Product[]> => {
    const {data} = await axiosInstance.get<Product[]>('/products/search', {params: {query}});
    return data;
}

export const mainProducts = async (): Promise<Product[]> => {
    const {data} = await axiosInstance.get<Product[]>('/products/main');
    return data;
}