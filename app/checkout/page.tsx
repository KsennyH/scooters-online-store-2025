import { Section, Title, CheckoutForm } from "@/app/components";

export default function Checkout() {
    
    return (
        <Section title="Оформление заказа">
            <div className="container">
                <Title level="h2" className="mb4">Ваш заказ</Title>
            </div>
            <CheckoutForm />
        </Section>
    );
}