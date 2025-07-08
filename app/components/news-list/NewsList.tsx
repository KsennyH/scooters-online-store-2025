import { JSX } from "react";
import styles from "./NewsList.module.css";
import { NewsCard } from "../news-card/NewsCard";

export const NewsList = ():JSX.Element => {
    return(
    <ul className="row">
        <li className="col-3 col-md-4 col-sm-6 col-full-12">
            <div className="container">
                <NewsCard />
            </div>
        </li>
        <li className="col-3 col-md-4 col-sm-6 col-full-12">
            <div className="container">
                <NewsCard />
            </div>
        </li>
        <li className="col-3 col-md-4 col-sm-6 col-full-12">
            <div className="container">
                <NewsCard />
            </div>
        </li>
        <li className="col-3 col-md-4 col-sm-6 col-full-12">
            <div className="container">
                <NewsCard />
            </div>
        </li>
    </ul>
    );
}