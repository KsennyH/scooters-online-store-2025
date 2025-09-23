import { CartItem } from "@/app/store/cartStore";

export function calcTotalAmount(cartItems: CartItem[]): number {
    return cartItems.reduce((sum, item) => {
    const price = item.product.price;
    const discount = item.product.discount;

    const finalPrice = discount
      ? price - (price * discount) / 100
      : price;

    return sum + item.quantity * finalPrice;
  }, 0);
}   