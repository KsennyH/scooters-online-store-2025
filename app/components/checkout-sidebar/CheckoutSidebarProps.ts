import { CartItem } from "@/app/store/cartStore";

export interface CheckoutSidebarProps {
    items: CartItem[],
    totalAmount: number,
    loading: boolean
}