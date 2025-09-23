'use client';
import { JSX } from "react";
import styles from "./ProductInfo.module.css";
import { Price } from "../price/Price";
import { InStock } from "../in-stock/InStock";
import { Button } from "../button/Button";
import { ProductInfoProps } from "./ProductInfoProps";
import { useAddToCart } from "@/app/hooks/useAddToCart";
import { Spinner } from "../spinner/Spinner";

export const ProductInfo = ({ id, name, price, inStock }: ProductInfoProps): JSX.Element => {

    const { addToCart, localLoading } = useAddToCart(name);

    return(
        <>
            <div className={styles.info}>
                <Price amount={price}/>
                <InStock stock={inStock}/>
            </div>
            <Button view="primary" disabled={localLoading} onClick={() => addToCart(id)}>{localLoading ? <Spinner /> : 'В корзину'}</Button>
        </>
    );
}