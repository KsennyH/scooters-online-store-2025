import { Reviews } from "@/app/components/reviews/Reviews";
import { Title } from "@/app/components/title/Title";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { JSX } from "react";
import { Breadcrumbs } from "@/app/components/breadcrumbs/Breadcrumbs";
import { ProductImageSlider } from "@/app/components/product-image-slider/ProductImageSlider";
import styles from "./page.module.css";
import { Button } from "@/app/components/button/Button";
import { Price } from "@/app/components/price/Price";

export default async function ProductsPage({ params }: { params: Promise<{ slug: string }> }): Promise<JSX.Element> {

    const { slug } = await params;

    const product = await prisma.product.findFirst({
        where: {
            slug: slug
        },
        include: {
            category: true
        },
    })

    if(!product) {
        return notFound();
    }
    
    return (
        <section className="section">
            <div className="container">
                <Breadcrumbs activeProduct={product} breadcrumbs={{name: product.category.name, slug: product.category.slug}} />       
            
                <Title level="h1" className="mb4">{product.name}</Title>
                <Reviews />
            </div>

            <div className="row">
                <div className="col-6">
                    <div className="container">
                        <ProductImageSlider images={product.images} />
                    </div>
                </div>
                <div className="col-6">
                    <div className="container">
                        {product.isNew && <div className={styles.new}>New</div>}
                        <div className={styles.info}>
                            <Price amount={product.price}/>
                            {product.inStock && <div className={styles.stock}>В наличии</div>}
                        </div>
                        <Button view="primary">Купить</Button>
                    </div>
                    
                </div>
                <div className={styles.descr}>
                    <Title level="h2" className="mb4">Описание</Title>
                    <div className="container">{product.description}</div>
                </div>
                
            </div>
        </section>
    );
}