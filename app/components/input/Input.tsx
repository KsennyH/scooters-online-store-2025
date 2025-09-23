import { JSX } from "react";
import styles from "./../checkout-form/CheckoutForm.module.css";
import { ErrorText } from "../error-text/ErrorText";
import cn from "classnames";
import { InputProps } from "./InputProps";

export const Input = ({className, error, ...props}:InputProps): JSX.Element => {
    return(
        <div className={styles.inputWrapper}>
            <input className={cn(styles.input,className)} {...props} />
            {error && <ErrorText text={error}/>}
        </div>
    );
}