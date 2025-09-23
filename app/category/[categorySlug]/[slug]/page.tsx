import { Reviews, Title, Breadcrumbs, ProductImageSlider, ProductInfo, Section } from "@/app/components";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { JSX } from "react";
import styles from "./page.module.css";

export default async function ProductsPage({ params }: { params: Promise<{ categorySlug: string, slug: string }> }): Promise<JSX.Element> {

    const { slug, categorySlug } = await params;

    const product = await prisma.product.findFirst({
        where: {
            slug,
            category: {
                slug: categorySlug
            },
        },
        include: {
            category: true
        },
    });

    if(!product) {
        return notFound();
    }
    
    return (
        <section className="section">
            <div className="container">
                <Breadcrumbs activeProduct={product} breadcrumbs={{name: product.category.name, slug: product.category.slug}} />       
                <div className={styles.descr}>
                    <Title level="h1" className="mb4">{product.name}</Title>
                    <Reviews />
                </div>
            </div>

            <div className={`${styles.descr} row`}>
                <div className="col-6">
                    <div className="container">
                        <ProductImageSlider images={product.images} />
                    </div>
                </div>
                <div className="col-6">
                    <div className="container">
                        <ProductInfo id={product.id} name={product.name} price={product.price} inStock={product.inStock}/>
                    </div>
                    
                </div>
                <Section title="Описание" level="h2" className={styles.descr}>
                    <div className="container">{product.description}</div>
                </Section>
                
            </div>
        </section>
    );
}