import { JSX } from "react";
import Image from "next/image";
import styles from "./NewsCard.module.css";
import { Title } from "../title/Title";
import Link from "next/link";

export const NewsCard = (): JSX.Element => {
    return(
        <article className={styles.cardNews}>
            <div className={styles.cardImage}>
                <Image 
                src="/job.png"
                alt="Картинка"
                fill
                className={styles.image}
                />
            </div>
            <div className={styles.cardNewsContent}>
                <Title level="h4" className={styles.cardTitle}>Вакансия "Продавец-консультант"</Title>
                <p>В наш магазин в Санкт-Петербурге срочно требуется продавец-консультант.</p>
                <div className={styles.dataWrapper}>
                <span className={styles.data}>08. 07. 2025</span>
                <Link className={styles.link} href="#">Читать полностью</Link>
                </div>
            </div>
        </article>
    );
}