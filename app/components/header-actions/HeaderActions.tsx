'use client'
import { JSX } from "react";
import styles from "./HeaderActions.module.css";
import Cart from "./Cart.svg";
import { SearchForm } from "../search-form/SearchForm";
import Link from "next/link";
import { useCartStore } from "@/app/store/cartStore";
import Image from "next/image";

export const HeaderActions = (): JSX.Element => {

    const totalCount = useCartStore(
        (state) => state.items.reduce((sum, item) => sum + item.quantity, 0)
    );

    return(
        <div className={styles.headerActions}>
            <div className="row align-center">
                <div className="col-4 col-md-3 col-sm-6 col-full-12">
                    <div className="container">
                        <div className={styles.logo}>
                            <Image src='/Scooters-logo.png' alt="Scooters logo" width={100} height={100} />
                        </div>
                    </div>
                </div>
                <div className={`${styles.searchForm} col-4 col-md-5 col-sm-12`}>
                    <div className="container">
                        <SearchForm />
                    </div>
                </div>
                <div className="col-4 col-md-4 col-sm-6 col-full-12">
                    <div className="container">
                        <div className={styles.actions}>
                            <div className={styles.phone}>8 920 000 00 00</div>
                            <span className={styles.border}></span>
                            <div className={styles.icons}>
                                <Link href={'/cart'} className="relative">
                                    <Cart />
                                    <div className={styles.counter}>{totalCount}</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}