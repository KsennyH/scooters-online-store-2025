import { calcTotalAmount } from "@/app/lib/cart/calcTotalAmount";
import { getOrCreateCartByToken } from "@/app/lib/cart/getOrCreateCartByToken";
import { CartItem } from "@/app/store/cartStore";
import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {

        const token = req.cookies.get('cartToken')?.value;
        const cart = await getOrCreateCartByToken(token);

        const cartItems = cart.items.map((item) => ({
            id: item.id,
            quantity: item.quantity,
            product: {
                id: item.product.id,
                name: item.product.name,
                slug: item.product.slug,
                price: item.product.price,
                imageUrl: item.product.imageUrl,
                discount: item.product.discount,
                inStock: item.product.inStock,
            }
        }))

        const totalAmount = calcTotalAmount(cart.items as CartItem[]);

        return NextResponse.json({
            items: cartItems,
            totalAmount
        }, { status: 200 })
        
    } catch (error) {
        console.error('[CART_GET_ERROR]', error)
        return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
    }
}

export async function POST (req: NextRequest) {
    try{

        const { productId } = await req.json();

        if (!productId) {
            return NextResponse.json({ error: "Не удалось добавить продукт" }, { status: 400 });
        }

        const token = req.cookies.get('cartToken')?.value;
        const cart = await getOrCreateCartByToken(token);

        const existingItem = await prisma.cartItem.findFirst({
            where: {
                cartId: cart.id,
                productId,
            },
        });

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let updatedItem;

        if (existingItem) {
            updatedItem = await prisma.cartItem.update({
                where: { id: existingItem.id },
                data: {
                    quantity: existingItem.quantity + 1,
                },
            });
        } else {
            updatedItem = await prisma.cartItem.create({
                data: {
                    cartId: cart.id,
                    productId,
                    quantity: 1,
                },
            });
        }

        const cartItems = await prisma.cartItem.findMany({
            where: { cartId: cart.id },
            include: { product: true },
        });

        const totalAmount = calcTotalAmount(cartItems as CartItem[]);

        await prisma.cart.update({
            where: { id: cart.id },
            data: { totalAmount },
        });

        return NextResponse.json({ 
            message: "Товар добавлен в корзину",
            items: cartItems,
            totalAmount, 
        },
        { status: 200 });
        
    } catch(error) {
        console.error("[ADD_CART_ITEM_ERROR]", error);
        return NextResponse.json({ error: "Ошибка при добавлении товара в корзину" }, { status: 500 });
    }
}