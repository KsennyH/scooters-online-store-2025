'use client';
import { Section, Price, Button, EmptyCart } from "@/app/components";
import { JSX, useEffect } from "react";
import styles from "./page.module.css";
import { useCartStore } from "../store/cartStore";
import Link from "next/link";
import { CartItemList } from "../components/cart-item-list/CartItemList";

export default function Cart(): JSX.Element {

    const {items, totalAmount, loading, fetchCart} = useCartStore();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        fetchCart()
    }, []);

    if (items.length === 0) {
        return <EmptyCart />
    }

    return(
        <Section title="Корзина">
            <div className="container">
                <CartItemList items={items}/>
                {items.length > 0 &&  (<div className={styles.cartPrice}>
                    <Price amount={totalAmount}/>
                    <Link href={'/checkout'}>
                        <Button view="secondary" disabled={loading}>Оформить заказ</Button>
                    </Link>
                </div>
                )}
            </div>
        </Section>
    );
}