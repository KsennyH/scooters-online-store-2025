import { JSX } from "react";
import styles from "./ProductsList.module.css";
import { Title } from "../title/Title";
import { ProductCard } from "../product-card/ProductCard";
import { ProductsListProps } from "./ProductsListProps";

export const ProductsList = (): JSX.Element => {
    return(
        <ul className="row">
            <li className="col-2 col-lg-3 col-md-4 col-sm-6 col-full-12">
            <div className="container">
                <ProductCard />
            </div>
            </li>
            <li className="col-2 col-lg-3 col-md-4 col-sm-6 col-full-12">
            <div className="container">
                <ProductCard />
            </div>
            </li>
            <li className="col-2 col-lg-3 col-md-4 col-sm-6 col-full-12">
            <div className="container">
                <ProductCard />
            </div>
            </li>
            <li className="col-2 col-lg-3 col-md-4 col-sm-6 col-full-12">
            <div className="container">
                <ProductCard />
            </div>
            </li>
            <li className="col-2 col-lg-3 col-md-4 col-sm-6 col-full-12">
            <div className="container">
                <ProductCard />
            </div>
            </li>
            <li className="col-2 col-lg-3 col-md-4 col-sm-6 col-full-12">
            <div className="container">
                <ProductCard />
            </div>
            </li>
        </ul>
    );
}