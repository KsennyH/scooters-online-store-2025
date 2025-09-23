import { axiosInstance } from '@/services/axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Product = {
    id: number,
    name: string,
    slug: string,
    price: number,
    imageUrl: string,
    discount: number,
    inStock: boolean,
}

export type CartItem = {
    id: number,
    quantity: number,
    product: Product
}

export interface CartState {
    items: CartItem[],
    totalAmount: number,
    loading: boolean,
    error: boolean,
    fetchCart: () => Promise<void>,
    updateQuantity: (productId: number, action: "increment" | "decrement") => Promise<void>,
    removeProduct: (productId: number) => Promise<void>,
    addProduct: (productId: number) => Promise<void>
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
    items: [],
    totalAmount: 0,
    loading: false,
    error: false,
    fetchCart: async () => {
        try{
            set({loading: true, error: false});
            const { data } = await axiosInstance.get('/cart');
            set({
                items: data.items,
                totalAmount: data.totalAmount,
                loading: false,
                error: false
            });
        } catch(error) {
            set({loading: false, error: true});
            console.error('[ZUSTAND_FETCH_CART_ERROR]', error);
        }
    },
    addProduct: async (productId) => {
        try{
            set({loading: true, error: false});
            const {data} = await axiosInstance.post('/cart', { productId });
            set({ items: data.items, totalAmount: data.totalAmount, loading: false, error: false });
        } catch(error) {
            set({ loading: false, error: true });
            console.error('[ZUSTAND_ADD_ERROR]', error);
        }
    },
    updateQuantity: async (productId, action) => {
        try{
            set({loading: true, error: false});
            const {data} = await axiosInstance.patch('/cart/item', { productId, action });
            set({ items: data.items, totalAmount: data.totalAmount, loading: false, error: false });

        } catch(error) {
            set({ loading: false, error: true });
            console.error('[ZUSTAND_UPDATE_ERROR]', error);
        }
    },
    removeProduct: async (productId) => {

        try{
            set({loading: true, error: false});
            const {data} = await axiosInstance.delete(`/cart/item/${productId}`);
            set({ items: data.items, totalAmount: data.totalAmount, loading: false, error: false });

        } catch(error) {
            set({ loading: false, error: true });
            console.error("[ZUSTAND_REMOVE_ERROR]", error);
        }
    }
}),
    {
      name: 'cart-storage',

      partialize: (state) => ({
        items: state.items,
        totalAmount: state.totalAmount,
      }),
    }
    )
)