import { Category, Product } from "@prisma/client"
import { axiosInstance } from "./axios"

export type ProductWithCategory = Product & {
  category: Category
};

export const search = async (query:string): Promise<ProductWithCategory[]> => {
    const {data} = await axiosInstance.get<ProductWithCategory[]>('/products/search', {params: {query}});
    return data;
}

export const getMainProducts = async (): Promise<ProductWithCategory[]> => {
    const {data} = await axiosInstance.get<ProductWithCategory[]>('/products/main');
    return data;
}