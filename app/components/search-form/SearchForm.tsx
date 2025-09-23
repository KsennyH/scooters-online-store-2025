'use client'

import { JSX, useRef, useState } from "react";
import Image from "next/image";
import styles from "./SearchForm.module.css";
import { Button } from "../button/Button";
import { Api } from "@/services/api-client";
import Link from "next/link";
import { Title } from "../title/Title";
import { useClickAway, useDebounce } from "react-use";
import { ProductWithCategory } from "@/services/products";

export const SearchForm = (): JSX.Element => {

    const [focused, setFocused] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [productsResult, setProductsResult] = useState<ProductWithCategory[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const ref = useRef(null);

    useClickAway(ref, () => {
        setFocused(false);
    });

    useDebounce(() => {
        if(searchQuery.trim().length === 0) {
            setProductsResult([]);
            setError(null);
            return;
        }

        setLoading(true);
        setError(null);
        
        Api.products.search(searchQuery.trim())
            .then(products => setProductsResult(products))
            .catch(() => setError('Search error'))
            .finally(() => setLoading(false));
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
                <Button className={styles.searchButton} view="secondary" icon={true} type="button">
                    <Image src="/Search.svg"
                        alt="Поиск"
                        width={24}
                        height={24}
                    />
                </Button>
            </form>
            { productsResult.length > 0 && (
                <div className={`${styles.searchResult} ${focused ? styles.open : ''}`}>
                    {loading && <div>Загрузка...</div>}
                    {error && <div>{error}</div>}
                    {
                        productsResult.map((product, i:number) => (
                            <Link className={styles.searchLink} key={product.id} href={`/category/${product.category.slug}/${product.slug}`} onClick={onClickItem}>
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