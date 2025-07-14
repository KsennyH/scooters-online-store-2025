import { JSX } from "react";
import Image from "next/image";
import styles from "./NewsCard.module.css";
import { Title } from "../title/Title";
import Link from "next/link";
import { News } from "@prisma/client";

export const NewsCard = ({...obj}: News): JSX.Element => {
    return(
        <article className={styles.cardNews}>
            <div className={styles.cardImage}>
                <Image 
                src={obj.imageUrl}
                alt={obj.title}
                fill
                sizes="(max-width: 500px) 100vw,
                (max-width: 768px) 50vw,
                (max-width: 992px) 33vw,
                25vw"
                className={styles.image}
                />
            </div>
            <div className={styles.cardNewsContent}>
                <Title level="h4" className={styles.cardTitle}>{obj.title}</Title>
                <p className={styles.cardText}>{obj.content}</p>
                <div className={styles.dataWrapper}>
                <span className={styles.data}>{new Date((obj.createdAt)).toLocaleDateString("ru-RU")}</span>
                <Link className={styles.link} href="#">Читать полностью</Link>
                </div>
            </div>
        </article>
    );
}