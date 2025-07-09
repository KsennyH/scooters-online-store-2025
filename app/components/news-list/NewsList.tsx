'use client'

import { JSX, useEffect, useState } from "react";
import styles from "./NewsList.module.css";
import { NewsCard } from "../news-card/NewsCard";

type News = {
  id: number
  title: string
  imageUrl: string
  images?: string[]
  content: string
  createdAt: string
  updatedAt: string
}

export const NewsList = ():JSX.Element => {

    const [newsArray, setNewsArray] = useState<News[]>([]);

    useEffect(() => {
        fetch('api/news')
            .then(res => res.json())
            .then(setNewsArray)
            .catch(console.error)
    }, [])

    console.log(newsArray);

    if(newsArray.length === 0) return <p>Загрузка...</p>

    return(
    <ul className="row">
        {
            newsArray.map((obj, i:number) => (
                <li className="col-3 col-md-4 col-sm-6 col-full-12" key={i}>
                    <div className="container">
                        <NewsCard {...obj} />
                    </div>
                </li>
            ))
        }
        
    </ul>
    );
}