'use client';
import { JSX, useEffect, useState } from "react";
import styles from "./CategoryList.module.css";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import { Title } from "../title/Title";
import Image from "next/image";
import { Api } from "@/services/api-client";
import { Category } from "@prisma/client";

export const CategoryList = ():JSX.Element => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        Api.categories.categories().then(setCategories);
    }, [])
    return(
        <ul className="row">
            { categories.length === 0 ? [...Array(4)].map((_, i) => (
                    <li className="col-3 col-md-4 col-sm-6 col-full-12" key={i}>
                    <div className="container">
                        <div className={styles.categoryItem}>
                                <div className={styles.categoryImageSkeleton}>
                                    <Skeleton style={{ objectFit: 'contain', padding: '20%' }}/>
                                </div>
                                <div className={styles.categoryTitle}>
                                    <Skeleton style={{ width: '100%', height: '50px' }}/>
                                </div>
                        </div>
                    </div>
                    </li>
            )) :
                categories.map((obj) => (
                    <li className="col-3 col-md-4 col-sm-6 col-full-12" key={obj.id}>
                        <div className="container">
                            <Link href={`category/${obj.slug}`} className={styles.categoryItem}>
                                <div className={styles.categoryImage}>
                                    <Image src={obj.imageUrl} alt={obj.name} fill style={{ objectFit: 'contain', padding: '20%' }}/>
                                </div>
                                <div className={styles.categoryTitle}>
                                    <Title level="h4">{obj.name}</Title>
                                </div>
                            </Link>
                        </div>
                    </li>
                )) 
            }
        </ul>
    );
}