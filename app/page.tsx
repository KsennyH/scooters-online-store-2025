import { AboutStore, NewsList, ProductsList, Section } from "@/app/components";

export default function Home() {
  return (
    <>
      <Section title="Топ продаж">
        <ProductsList />
      </Section>
      <Section title="Новости и статьи">
        <NewsList />
      </Section>
      <AboutStore />
    </>
  );
}
