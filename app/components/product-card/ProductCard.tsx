'use client'
import { JSX } from "react";
import styles from "./ProductCard.module.css";
import { Title } from "../title/Title";
import Image from "next/image";
import CardBalance from "./CardBalance.svg";
import CardLike from "./CardLike.svg";
import { Rating } from "../rating/Rating";
import { Button } from "../button/Button";
import { Product } from "@prisma/client";
import Link from "next/link";

export const ProductCard = ({...obj}:Product):JSX.Element => {
    return(
        <article className={styles.card}>
            <div>
                {
                    obj.isNew && <div className={styles.new}>New</div>
                }
                <div className={styles.icons}>
                    <CardBalance />
                    <CardLike />
                </div>
            </div>
            
            <div className={styles.cardImage}>
                <Image
                    src={obj.imageUrl}
                    alt={obj.name}
                    fill
                    sizes="(max-width: 500px) 100vw,
                    (max-width: 768px) 50vw,
                    (max-width: 992px) 33vw,
                    25vw"
                    className={styles.image}
                />
            </div>
            <Link href={`products/${obj.slug}`}><Title level="h3" className={styles.cardTitle}>{obj.name}</Title></Link>
            <div className={styles.reviews}>
                <Rating rating={4} />
                <div className={styles.reviewText}>Отзывы: 6</div>
            </div>
            <div className={styles.priceWrapper}>
                <span className={styles.price}>{obj.price}<sub className={styles.priceSymbol}>руб</sub></span>
                <Button view="primary">Купить</Button>
            </div>
        </article>
    );
}