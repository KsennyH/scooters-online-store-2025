import { JSX } from 'react';
import styles from './Title.module.css';
import TitleProps from './TitleProps';
import cn from "classNames";

export const Title = ({level, children, className, ...props}: TitleProps): JSX.Element => {
    return(
        <>
            {level == 'h1' && <h1 {...props} className={cn(`${styles.title} ${styles.h1}`, className )}>{children}</h1>}
            {level == 'h2' && <h2 {...props} className={cn(`${styles.title} ${styles.h2}`, className)}>{children}</h2>}
            {level == 'h3' && <h3 {...props} className={cn(`${styles.title} ${styles.h3}`, className)}>{children}</h3>}
            {level == 'h4' && <h4 {...props} className={cn(`${styles.title} ${styles.h4}`, className)}>{children}</h4>}
        </> 
    );
}