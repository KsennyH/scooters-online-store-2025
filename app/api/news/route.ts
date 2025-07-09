import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET() {
    try{
        const news = await prisma.news.findMany({
            orderBy: { createdAt: 'desc' },
        })
        return NextResponse.json(news)
    } catch(error) {
        console.error('Ошибка при получении новостей:', error)
        return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
    }
}