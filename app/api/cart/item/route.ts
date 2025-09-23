import { getOrCreateCartByToken } from "@/app/lib/cart/getOrCreateCartByToken";
import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import { calcTotalAmount } from "@/app/lib/cart/calcTotalAmount";
import { CartItem } from "@/app/store/cartStore";

export async function PATCH(req: NextRequest) {
    try{
        const { productId, action } = await req.json();
        const token = req.cookies.get('cartToken')?.value;
        const cart = await getOrCreateCartByToken(token);

        if (!productId) {
            return NextResponse.json({ error: "Неверные данные" }, { status: 400 });
        }

        const cartItem = await prisma.cartItem.findFirst({
            where: { cartId: cart.id, productId },
        });

        if (!cartItem) {
            return NextResponse.json({ error: "Товар не найден в корзине" }, { status: 404 });
        }

        const newQuantity = action === "increment" ? cartItem.quantity + 1 : cartItem.quantity - 1;

        if(newQuantity >= 1) {
            await prisma.cartItem.update({
                where: { id: cartItem.id },
                data: { quantity: newQuantity },
            });
        }

        const cartItems = await prisma.cartItem.findMany({
            where: { cartId: cart.id },
            include: { product: true },
            orderBy: { createdAt: "asc" },
        });

        const totalAmount = calcTotalAmount(cartItems as CartItem[]);

         await prisma.cart.update({
            where: { id: cart.id },
            data: { totalAmount: Number(totalAmount)},
        });

        return NextResponse.json({ totalAmount, items: cartItems }, { status: 200 });

    } catch(error) {
        console.error("[UPDATE_CART_ITEM_ERROR]", error);
        return NextResponse.json({ error: "Ошибка обновления количества" }, { status: 500 });
    }
}