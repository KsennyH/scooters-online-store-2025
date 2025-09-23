import { JSX } from "react";
import styles from "./Price.module.css";

export const Price = ({ amount }: { amount: number }): JSX.Element => {
    const formattedPrice = amount.toLocaleString('ru-RU');
    return(
        <div className={styles.price}>{formattedPrice}<sub className={styles.priceSymbol}>руб.</sub></div>
    );
}