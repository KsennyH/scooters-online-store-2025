import { JSX } from 'react';
import styles from './Title.module.css';
import TitleProps from './TitleProps';

export const Title = ({level, children}: TitleProps): JSX.Element => {
    return(
        <>
            {level == 'h1' && <h1 className={`${styles.title} ${styles.h1}`}>{children}</h1>}
            {level == 'h2' && <h2 className={`${styles.title} ${styles.h2}`}>{children}</h2>}
            {level == 'h3' && <h3 className={`${styles.title} ${styles.h3}`}>{children}</h3>}
            {level == 'h4' && <h4 className={`${styles.title} ${styles.h4}`}>{children}</h4>}
        </> 
    );
}