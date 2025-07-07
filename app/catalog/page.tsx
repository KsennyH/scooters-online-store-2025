import { Metadata } from "next"
import { Title } from "../components/title/Title"
import { Button } from "../components/button/Button"
import { Rating } from "../components/rating/Rating"

export const metadata: Metadata = {
  title: "Каталог товаров"
}

export default function CatalogPage() {
  return (
    <main className="p-6">
      <Title level="h1">Каталог самокатов</Title>
      <Title level="h2">Электросамокаты</Title>
      <Title level="h3">Самокатики</Title>
      <Title level="h4">Моноколёса</Title>
      <Button view="primary">Кнопка</Button>
      <Button view="secondary">Кнопка</Button>
      <Rating rating={4}></Rating>
    </main>
  )
}