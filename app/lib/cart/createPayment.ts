import axios from "axios";

export async function createPayment({amount, orderId, description}: {amount: number, orderId: number, description: string} ) {
    if (!process.env.YOOKASSA_SECRET_KEY) {
        throw new Error('Не указан ключ YOOKASSA_SECRET_KEY');
    }

    const { data } = await axios.post(
        'https://api.yookassa.ru/v3/payments',
        {
            amount: {
                value: amount,
                currency: 'RUB',
            },
            capture: true,
            description: description,
            metadata: {
                order_id: orderId,
            },
            confirmation: {
                type: 'redirect',
                return_url: 'http://localhost:3000/',
            },
        },
        {
            auth: {
                username: process.env.YOOKASSA_SHOP_ID!,
                password: process.env.YOOKASSA_SECRET_KEY!,
            },
            headers: {
                'Idempotence-Key': crypto.randomUUID(),
            },
        },
    );
    return data;
}