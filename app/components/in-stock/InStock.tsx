import { JSX } from "react";
import styles from "./InStock.module.css";
import Image from "next/image";
import { inStockProps } from "./InStockProps";
import cn from "classnames";

export const InStock = ({stock, ...props}: inStockProps): JSX.Element => {
    return(
        <div className={cn(styles.stock, stock ? styles.stockTrue : styles.stockFalse)} {...props}>
           <Image src={stock ? '/uploads/icons/instock.png' : '/uploads/icons/delivery.png'} alt="Instock-icon" width={12} height={12} />
            {stock ? 'В наличии' : 'Под заказ'}
        </div>
    );
}