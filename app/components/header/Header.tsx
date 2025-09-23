import { JSX } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import { HeaderActions } from "../header-actions/HeaderActions";
import Link from "next/link";

export const Header = (): JSX.Element => {
    return(
        <>
            <header className={styles.header}>
                <div className="container">
                    <nav className={styles.navigation}>
                        <ul className={styles.navigationList}>
                            <li><Link href={'/'}>Главная</Link></li>
                            <li><Link href={'/category'}>Каталог</Link></li>
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
            <HeaderActions />
        </>
    );
}