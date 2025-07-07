import { JSX } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export const Header = (): JSX.Element => {
    return(
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.navigation}>
                    <ul className={styles.navigationList}>
                        <li>Каталог</li>
                        <li>О магазине</li>
                        <li>Доставка и оплата</li>
                    </ul>
                    <Image 
                        src="/User.svg"
                        alt="User icon"
                        width={32}
                        height={32}
                    />
                </nav>
            </div>
        </header>
    );
}