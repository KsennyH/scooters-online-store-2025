'use client'

import { JSX, useEffect, useState } from "react";
import { NewsCard } from "../news-card/NewsCard";
import { Api } from "@/services/api-client";
import { News } from "@prisma/client";
import { NewsCardSkeleton } from "../news-card/NewsCardSkeleton";

export const NewsList = ():JSX.Element => {

    const [newsArray, setNewsArray] = useState<News[]>([]);

    useEffect(() => {
        Api.news.news().then(items => setNewsArray(items))
    }, [])

    return(
    <ul className="row">
        {
            newsArray.length === 0 ? [...Array(4)].map((_, i) => (
          <li className="col-3 col-md-4 col-sm-6 col-full-12" key={i}>
            <div className="container">
                <NewsCardSkeleton />
            </div>
            
          </li>
        )) :
            newsArray.map((obj) => (
                <li className="col-3 col-md-4 col-sm-6 col-full-12" key={obj.id}>
                    <div className="container">
                        <NewsCard {...obj} />
                    </div>
                </li>
            ))
        }
        
    </ul>
    );
}