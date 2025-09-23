import { JSX } from "react";
import { CategoryList, ProductsList, Section } from "@/app/components";

export default function CategoryPage(): JSX.Element {

    return (
        <>
            <Section title="Категории">
                <CategoryList />
            </Section>
            <Section title="Топ продаж" level="h2">
                <ProductsList />
            </Section>
        </>
    );
};