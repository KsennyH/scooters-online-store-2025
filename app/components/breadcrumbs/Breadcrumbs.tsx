import Link from "next/link";
import { JSX } from "react";
import { BreadcrumbsProps } from "./BreadcrumbsProps";
import styles from './Breadcrumbs.module.css';

export const Breadcrumbs = ({activeProduct, breadcrumbs}: BreadcrumbsProps): JSX.Element => {
    return (
        <div className={styles.breadcrumbs}>
            <nav>
                <ul className={styles.breadcrumbsList}>
                    <li className={styles.breadcrumbsItem}>
                        <Link href={'/'} className={styles.breadcrumbsLink}>Главная</Link>
                    </li>
                    <li className={styles.breadcrumbsItem}>
                        <Link href={`/category/${breadcrumbs.slug}`} className={styles.breadcrumbsLink}>
                            {breadcrumbs.name}
                        </Link>
                    </li>
                    <li className={styles.breadcrumbsItem}>
                        {activeProduct.name}
                    </li>
                </ul>
            </nav>
        </div>
    );
};