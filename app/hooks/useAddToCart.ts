'use client';
import { useState } from "react";
import { useCartStore } from "../store/cartStore";
import toast from "react-hot-toast";

export const useAddToCart = (name?: string) => {
    const addProduct = useCartStore(state => state.addProduct);
    const [localLoading, setLocalLoading] = useState(false);

    const addToCart = async (id: number) => {
        try{
            setLocalLoading(true);
            await addProduct(id);
            toast.success(`${name || "Товар"} добавлен в корзину!`);
        } catch(error) {
            toast.success(`Не удалось добавить ${name || "товар"} в корзину!`);
            console.error(error);
        }finally{
            setLocalLoading(false);
        }
    }
    return { addToCart, localLoading };
}