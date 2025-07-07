import { JSX } from "react";
import Image from "next/image";
import styles from "./SearchForm.module.css";
import { Button } from "../button/Button";

export const SearchForm = (): JSX.Element => {
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" placeholder="Поиск" />
            <Button className={styles.searchButton} view="secondary" icon={true} type="submit">
                <Image src="/Search.svg"
                    alt="Поиск"
                    width={24}
                    height={24}
                />
            </Button>
        </form>
    );
}