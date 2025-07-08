import Image from "next/image";
import styles from "./page.module.css";
import { ProductsList } from "./components/products-list/ProductsList";
import { AboutStore } from "./components/about-store/AboutStore";
import { Title } from "./components/title/Title";
import Link from "next/link";
import { NewsCard } from "./components/news-card/NewsCard";
import { Section } from "./components/section/Section";
import { NewsList } from "./components/news-list/NewsList";

export default function Home() {
  return (
    <main className="main">
      <Section title="Топ продаж">
        <ProductsList />
      </Section>
      <Section title="Новости и статьи">
        <NewsList />
      </Section>
      <AboutStore />
    </main>
  );
}
