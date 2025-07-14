'use client'

import { JSX, useRef, useState } from "react";
import Image from "next/image";
import styles from "./SearchForm.module.css";
import { Button } from "../button/Button";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import Link from "next/link";
import { Title } from "../title/Title";
import { useClickAway, useDebounce } from "react-use";

export const SearchForm = (): JSX.Element => {

    const [focused, setFocused] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [productsResult, setProductsResult] = useState<Product[]>([]);
    const ref = useRef(null);

    useClickAway(ref, () => {
        setFocused(false);
    });

    useDebounce(() => {
        if(searchQuery.trim().length === 0) {
            setProductsResult([]);
            return;
        }
        Api.products.search(searchQuery.trim()).then(products => setProductsResult(products));
    }, 300, [searchQuery]);

    const onClickItem = () => {
        setFocused(false);
        setSearchQuery('');
        setProductsResult([]);
    }

    return (
        <div className={styles.formWrapper}>
            <form className={styles.form} ref={ref}>
                <input value={searchQuery} onFocus={() => setFocused(true)} onChange={(e) => setSearchQuery(e.target.value)} className={styles.input} type="text" placeholder="Поиск" />
                <Button className={styles.searchButton} view="secondary" icon={true} type="submit">
                    <Image src="/Search.svg"
                        alt="Поиск"
                        width={24}
                        height={24}
                    />
                </Button>
            </form>
            { productsResult.length > 0 && (
                <div className={`${styles.searchResult} ${focused ? styles.open : ''}`}>
                    {
                        productsResult.map((product, i:number) => (
                            <Link className={styles.searchLink} key={product.id} href={`/products/${product.id}`} onClick={onClickItem}>
                                <Image src={product.imageUrl} alt={product.name} width={50} height={50}/>
                                <Title level="h4">{product.name}</Title>
                            </Link>
                        ))
                    }
                </div>
            )
            }
        </div>
    );
}