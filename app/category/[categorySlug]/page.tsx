import { ProductCard, Section } from "@/app/components";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { JSX } from "react";

export default async function Category( { params }: { params: Promise<{ categorySlug: string }> }): Promise<JSX.Element> {

    const { categorySlug } = await params;

    const category = await prisma.category.findFirst({
        where: {
            slug: categorySlug
        },
        include: {
            products: {
                include: {
                    category: true
                }
            }
        }
    });

    if(!category) {
        return notFound();
    }

    return (
        <Section title={category.name}>
            <ul className="row">
                {category.products.map((obj) => (
                    <li className="col-3 col-md-4 col-sm-6 col-full-12" key={obj.id}>
                        <div className="container height100">
                            <ProductCard {...obj} />
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    );
}

