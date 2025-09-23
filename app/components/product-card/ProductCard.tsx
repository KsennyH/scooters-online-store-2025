'use client'
import { JSX } from "react";
import styles from "./ProductCard.module.css";
import { Title } from "../title/Title";
import Image from "next/image";
import CardBalance from "./CardBalance.svg";
import CardLike from "./CardLike.svg";
import { Button } from "../button/Button";
import Link from "next/link";
import { Reviews } from "../reviews/Reviews";
import { ProductWithCategory } from "@/services/products";
import { Spinner } from "../spinner/Spinner";
import { Price } from "../price/Price";
import { useAddToCart } from "@/app/hooks/useAddToCart";
export const ProductCard = ({ id, category, slug, imageUrl, name, isNew, price, inStock }: ProductWithCategory):JSX.Element => {

    const { addToCart, localLoading } = useAddToCart(name);

    return(
        <article className={styles.card}>
            <div>
                {
                    isNew && <div className={styles.new}>New</div>
                }
                <div className={styles.icons}>
                    <CardBalance />
                    <CardLike />
                </div>
            </div>
            
            <div className={styles.cardImage}>
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    sizes="(max-width: 500px) 100vw,
                    (max-width: 768px) 50vw,
                    (max-width: 992px) 33vw,
                    25vw"
                    className={styles.image}
                />
            </div>
            <Link href={`/category/${category.slug}/${slug}`}><Title level="h3" className={styles.cardTitle}>{name}</Title></Link>
            <Reviews />
            <div className={styles.priceWrapper}>
                <Price amount={ price } />
                <Button view="primary" disabled={localLoading} onClick={() => addToCart(id)}>{localLoading ? <Spinner /> : 'В корзину'}</Button>
            </div>
        </article>
    );
}