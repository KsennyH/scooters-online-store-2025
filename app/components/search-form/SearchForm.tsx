'use client'

import { JSX, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./SearchForm.module.css";
import { Button } from "../button/Button";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import Link from "next/link";

export const SearchForm = (): JSX.Element => {

    const [searchQuery, setSearchQuery] = useState('');
    const [productsResult, setProductsResult] = useState<Product[]>([]);

    useEffect(() => {
        Api.products.search(searchQuery).then(setProductsResult);
    }, [searchQuery]);

    return (
        <div className={styles.formWrapper}>
            <form className={styles.form}>
                <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className={styles.input} type="text" placeholder="Поиск" />
                <Button className={styles.searchButton} view="secondary" icon={true} type="submit">
                    <Image src="/Search.svg"
                        alt="Поиск"
                        width={24}
                        height={24}
                    />
                </Button>
            </form>
            { productsResult.length > 0 &&
                <div className={`${styles.searchResult} ${styles.open}`}>
                    {
                        productsResult.map((product, i:number) => (
                            <Link key={i} href={`/products/${product.id}`}>
                                <h3>{product.name}</h3>
                            </Link>
                        ))
                    }
                </div>
            }
        </div>
    );
}