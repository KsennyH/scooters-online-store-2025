import { prisma } from "@/prisma/prisma-client";
import { randomUUID } from 'crypto';
import { cookies } from "next/headers";

export async function getOrCreateCartByToken(token?: string) {

    let cartToken = token;

    if (!cartToken) {
        cartToken = randomUUID();

        (await cookies()).set('cartToken', cartToken, {
            maxAge: 60 * 60 * 24 * 30,
        });
    }

    let cart = await prisma.cart.findUnique({
        where: { token: cartToken },
            include: {
                items: {
                    include: {
                        product: true
                    },
                    orderBy: {
                        createdAt: 'asc',
                    },
                }
            }
    });

    if (!cart) {
        cart = await prisma.cart.create({
            data: {
                token: cartToken,
            },
            include: {
                items: {
                include: {
                    product: true,
                },
                },
            },
        });
    }

    return cart;

}