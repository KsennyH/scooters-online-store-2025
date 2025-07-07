import { JSX } from "react";
import { ButtonProps } from "./ButtonProps";
import styles from './Button.module.css';
import cn from "classNames";



export const Button = ({view, children, className, icon, ...props}:ButtonProps): JSX.Element => {
    return(
        <button className={cn(styles.button, className, {
            [styles.primary]: view == 'primary',
            [styles.secondary]: view == 'secondary',
            [styles.icon]: icon == true
        })} {...props}>
            {children}
        </button>
    );
}