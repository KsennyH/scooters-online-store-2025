import { JSX } from "react";
import styles from './Reviews.module.css';
import { Rating } from "../rating/Rating";

export const Reviews = (): JSX.Element => {
    return(
        <div className={styles.reviews}>
            <Rating rating={4} />
            <div className={styles.reviewText}>Отзывы: 6</div>
        </div>
    );
}


              