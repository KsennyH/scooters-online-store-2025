import { JSX } from "react";
import styles from "./CheckoutSidebar.module.css";
import { Title } from "../title/Title";
import { Price } from "../price/Price";
import { Button } from "../button/Button";
import { CheckoutSidebarProps } from "./CheckoutSidebarProps";

export const CheckoutSidebar = ({totalAmount, items, loading}: CheckoutSidebarProps): JSX.Element => {
    const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
    return(
        <div className={styles.order}>
            <Title level="h3" className="mb8">Итого</Title>
            <div className={`${styles.orderProducts} mb4`}>
                <div>Количество товаров:</div>
                <strong>{totalCount}</strong>
            </div>
            <div className={`${styles.orderProducts} mb4`}>
                <div>Стоимость доставки</div>
                <strong>Бесплатно</strong>
            </div>
            <div className={`${styles.orderProducts} mb8`}>
                <div>Итого к оплате</div>
                <Price amount={totalAmount} />
            </div>
            <Button view="secondary" type="submit" disabled={loading}>Подтвердить заказ</Button>
        </div>
    );
}