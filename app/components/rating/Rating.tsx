'use client'
import { JSX, useEffect, useState } from "react";
import RatingStarSmall from './RatingStarSmall.svg';
import styles from './Rating.module.css';
import cn from 'classNames';
import { RatingProps } from "./RatingProps";

export const Rating = ({rating, ...props}: RatingProps): JSX.Element => {
    const [arrayStars, setArrayStars] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        calculateRating(rating);
    }, [rating]);

    const calculateRating = (currentRating: number) => {
        const updatedArrayStars = new Array(5).fill(<></>).map((_, i: number ) => {
            return <RatingStarSmall className={cn(styles.star, {
                [styles.filled]: i < currentRating
            })} />
        });
        setArrayStars(updatedArrayStars);
    }

    return (
        <div {...props}>
            {
                arrayStars.map((r, i) => <span key={i}>{r}</span>)
            }
        </div>
    );
}