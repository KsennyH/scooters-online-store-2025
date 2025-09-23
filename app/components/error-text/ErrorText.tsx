import { JSX } from "react";
import styles from "./ErrorText.module.css";

export const ErrorText = ({text}: {text:string}): JSX.Element => {
    return(
        <div className={styles.error}>{text}</div>
    );
}