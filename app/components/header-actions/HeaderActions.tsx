'use client'
import { JSX } from "react";
import styles from "./HeaderActions.module.css";
import Balance from "./Balance.svg";
import Heart from "./Heart.svg";
import Cart from "./Cart.svg";
import { SearchForm } from "../search-form/SearchForm";

export const HeaderActions = (): JSX.Element => {
    return(
        <div className={styles.headerActions}>
            <div className="row align-center">
                <div className="col-4">
                    <div className="container">
                        <div>
                        Scooters-logo
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="container">
                        <div>
                            <SearchForm />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="container">
                        <div className={styles.actions}>
                            <div className={styles.phone}>8 920 000 00 00</div>
                            <span className={styles.border}></span>
                            <div className={styles.icons}>
                                <Balance />
                                <Heart />
                                <Cart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}