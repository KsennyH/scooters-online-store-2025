import { axiosInstance } from "./axios"

export interface CartItem {
    id: number,
    quantity: number,
    product: {
        id: number,
        name: string,
        slug: string,
        price: number,
        imageUrl: string,
        discount: number,
        inStock: boolean,
    }
}

export interface CartResponse {
    items: CartItem[],
    totalAmount: number
}

export const cartItems = async ():Promise<CartResponse> => {
    const { data } = await axiosInstance.get('/cart');
    return data;
}