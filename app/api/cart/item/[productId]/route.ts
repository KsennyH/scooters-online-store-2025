import { calcTotalAmount } from "@/app/lib/cart/calcTotalAmount";
import { getOrCreateCartByToken } from "@/app/lib/cart/getOrCreateCartByToken";
import { CartItem } from "@/app/store/cartStore";
import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE (req: NextRequest, { params }: { params: Promise<{ productId: string }> }) {
    try{

        const token = req.cookies.get('cartToken')?.value;
        const cart = await getOrCreateCartByToken(token);
        const { productId } = await params;

        await prisma.cartItem.deleteMany({
            where: {
                cartId: cart.id,
                productId: parseInt(productId)
            }
        });

        const cartItems = await prisma.cartItem.findMany({
            where: { cartId: cart.id },
            include: { product: true },
            orderBy: { createdAt: "asc" },
        });

        const totalAmount = calcTotalAmount(cartItems as CartItem[]);

        await prisma.cart.update({
            where: { id: cart.id },
            data: { totalAmount: Number(totalAmount) },
        });

        return NextResponse.json({ 
            message: "Товар удалён из корзины", 
            items: cartItems,
            totalAmount, 
        }, { status: 200 });

    } catch(error) {
        console.error("[DELETE_CART_ITEM_ERROR]", error);
        return NextResponse.json({ error: "Ошибка при удалении" }, { status: 500 });
    }
}