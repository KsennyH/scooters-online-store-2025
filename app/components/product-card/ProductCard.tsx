'use client'
import { JSX } from "react";
import styles from "./ProductCard.module.css";
import { Title } from "../title/Title";
import Image from "next/image";
import CardBalance from "./CardBalance.svg";
import CardLike from "./CardLike.svg";
import { Rating } from "../rating/Rating";
import { Button } from "../button/Button";

export const ProductCard = ():JSX.Element => {
    return(
        <article className={styles.card}>
            <div>
                <div className={styles.new}>New</div>
                <div className={styles.icons}>
                    <CardBalance />
                    <CardLike />
                </div>
            </div>
            
            <div className={styles.cardImage}>
                <Image
                    src="/kugoo.png"
                    alt="Самокат"
                    width={200}
                    height={200}
                />
            </div>
            <Title level="h3" className={styles.cardTitle}>Электросамокат</Title>
            <div className={styles.reviews}>
                <Rating rating={4} />
                <div className={styles.reviewText}>Отзывы: 6</div>
            </div>
            <div className={styles.priceWrapper}>
                <span className={styles.price}>25 000<sub className={styles.priceSymbol}>руб</sub></span>
                <Button view="primary">Купить</Button>
            </div>
        </article>
    );
}