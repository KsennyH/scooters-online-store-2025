"use client"
import { JSX, useEffect, useState } from "react";
import { ProductCard } from "../product-card/ProductCard";
import { Product } from "@prisma/client";
import { Api } from "@/services/api-client";
import { ProductCardSkeleton } from "../product-card/ProductCardSkeleton";

export const ProductsList = (): JSX.Element => {

    const [mainProducts, setMainProducts] = useState<Product[]>([]);

    useEffect(() => {
        Api.products.mainProducts().then(products => setMainProducts(products))
    }, []);

    return(
        <ul className="row">
            {
                mainProducts.length === 0 ? [...Array(4)].map((_, i) => (
                          <li className="col-lg-3 col-md-4 col-sm-6 col-full-12" key={i}>
                            <ProductCardSkeleton />
                          </li>
                        )) :
                mainProducts.map((obj) => 
                    (
                        <li className="col-lg-3 col-md-4 col-sm-6 col-full-12" key={obj.id}>
                            <div className="container">
                                <ProductCard {...obj} />
                            </div>
                        </li>
                    )
                )
            }
        </ul>
    );
}