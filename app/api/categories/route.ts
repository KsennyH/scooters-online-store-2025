import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET() {
    try{
        const categories = await prisma.category.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(categories);
    } catch(error) {
        console.error(error);
         return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
    }
}