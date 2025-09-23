'use client';

import { JSX } from "react";
import styles from "./Counter.module.css";
import { Button } from "../button/Button";
import { CounterProps } from "./CounterProps";
import { useCartStore } from "@/app/store/cartStore";

export default function Counter({productId}: CounterProps): JSX.Element {

    const updateQuantity = useCartStore(state => state.updateQuantity);

    const item = useCartStore(state => state.items.find((el) => el.product.id === productId));
    const quantity = item ? item.quantity : 0;

    const increment = () => {
        updateQuantity(productId, "increment");
    }

    const decrement = () => {
        if(quantity > 1) {
            updateQuantity(productId, "decrement");
        }
    }

    return(
        <div className={styles.counter}>
            <Button view="secondary" type="button" className={styles.counterBtn} disabled={quantity <= 1} onClick={decrement}>-</Button>
            <span>{item?.quantity}</span>
            <Button view="secondary" type="button" className={styles.counterBtn} onClick={increment}>+</Button>
        </div>
    );
}