import { Metadata } from "next"
import { Title } from "../components/title/Title"

export const metadata: Metadata = {
  title: "Каталог товаров"
}

export default function CatalogPage() {
  return (
    <main className="p-6">
      <Title level="h1">Каталог самокатов</Title>
      <Title level="h2">Электросамокаты</Title>
    </main>
  )
}