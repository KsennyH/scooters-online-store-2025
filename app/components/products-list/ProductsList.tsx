"use client"
import { JSX, useEffect, useState } from "react";
import { ProductCard } from "../product-card/ProductCard";
import { Api } from "@/services/api-client";
import { ProductCardSkeleton } from "../product-card/ProductCardSkeleton";
import { ProductWithCategory } from "@/services/products";

export const ProductsList = (): JSX.Element => {

    const [mainProducts, setMainProducts] = useState<ProductWithCategory[]>([]);

    useEffect(() => {
        Api.products.getMainProducts().then(setMainProducts)
    }, []);

    return(
        <ul className="row">
            {
                mainProducts.length === 0 ? [...Array(4)].map((_, i) => (
                          <li className="col-lg-3 col-md-4 col-sm-6 col-full-12" key={i}>
                            <div className="container">
                                <ProductCardSkeleton />
                            </div>
                            
                          </li>
                        )) :
                mainProducts.map((obj) => 
                    (
                        <li className="col-3 col-md-4 col-sm-6 col-full-12" key={obj.id}>
                            <div className="container height100">
                                <ProductCard {...obj} />
                            </div>
                        </li>
                    )
                )
            }
        </ul>
    );
}