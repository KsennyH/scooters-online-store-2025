import { JSX } from "react";
import styles from "./Footer.module.css";

export const Footer = (): JSX.Element => {
    return(
        <footer className={styles.footer}>
            <div className="container">
                Все права защищены. 2025
            </div>
        </footer>
    );
}