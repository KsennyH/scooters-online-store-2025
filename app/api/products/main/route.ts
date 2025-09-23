import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        const lastProducts = await prisma.product.findMany({
            orderBy: { createdAt: 'desc' },
            take: 8,
            include: {
                category: true
            }
        });
        return NextResponse.json(lastProducts);
    } catch(error) {
        console.error(error);
        return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
    }
}