import { JSX } from "react";
import styles from "./CartItemsList.module.css";
import { CartItem } from "../cart-item/CartItem";
import { CartItemProps } from "./CartItemProps";

export const CartItemList = ({items}: CartItemProps): JSX.Element => {
    return(
        <ul className={`${styles.cartItems} mb10`}>
            {
                items.map((obj) => (
                    <li className={styles.cartItem} key={obj.product.id}>
                        <CartItem {...obj} />
                    </li>
                ))
            }
        </ul>
    );
}