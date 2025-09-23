'use server';

import { OrderStatus } from "@prisma/client";
import { cookies } from 'next/headers';
import { prisma } from "./prisma/prisma-client";
import { InputsData } from "./app/components/checkout-form/CheckoutForm";
import { createPayment } from "./app/lib/cart/createPayment";
import { sendEmail } from "./app/lib/sendEmail";

export async function makeOrder (formData: InputsData) {
    try{
        const cartToken = (await cookies()).get('cartToken')?.value;

        if (!cartToken) {
            throw new Error('Токен не найден');
        }
        
        const userCart = await prisma.cart.findUnique({
            where: {
                token: cartToken,
            },
            include: {
                items: {
                    include: {
                        product: true
                    },
                    orderBy: {
                        createdAt: 'asc',
                    },
                },
                user: true,
            }
        })

        if(!userCart?.totalAmount) {
            return;
        }
        
        if (!userCart) {
            throw new Error('Cart not found');
        }

        const order = await prisma.order.create({
            data: {
                token: cartToken,
                status: OrderStatus.PENDING,
                totalAmount: userCart.totalAmount,
                fullname: formData.firstName + ' ' + formData.lastName,
                email: formData.email,
                address: String(formData.city?.value),
                phone: formData.phone,
                comment: formData.comment,
                items: JSON.stringify(userCart.items),
            }
        });

        await prisma.cart.update({
            where: {
                id: userCart.id
            },
            data: {
                totalAmount: 0
            }
        });

        await prisma.cartItem.deleteMany({
            where: {
                cartId: userCart.id
            }
        });

        const paymentData = await createPayment({
            orderId: order.id,
            amount: order.totalAmount,
            description: `Оформление заказа №${order.id}`,
        });

        if (paymentData) {
            await prisma.order.update({
                where: {
                id: order.id,
                },
                data: {
                    paymentId: paymentData.id,
                },
            });
        }

        const template = `<div>
            <h1>${order.fullname}!</h1>
            <div>Ваш заказ №${order.id} успешно создан. Вы можете оплатить его по <a href="${paymentData.confirmation.confirmation_url}">ссылке</a></div>
        </div>`;

        if(order.email) {
            await sendEmail(order.email, `Оформление заказа №${order.id}`, template);
        }

        if (!paymentData?.confirmation?.confirmation_url) {
            throw new Error("Не удалось получить ссылку для оплаты");
        }

        return paymentData.confirmation.confirmation_url;

    } catch(error) {
        console.error(error);
        throw error;
    }
}