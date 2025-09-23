import { prisma } from '@/prisma/prisma-client';
import { OrderStatus } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {

    const body = await req.json();

    const orderId = body.object.metadata?.order_id;

    if (!orderId) {
        console.error('Номер заказа не найден');
        return NextResponse.json({ error: 'Номер заказа не найден' }, { status: 400 })
    }

    let currentStatus;

    switch (body.event) {
        case 'payment.succeeded':
            currentStatus = OrderStatus.SUCCEEDED;
            console.log(`Оплата прошла. Заказ №${orderId} обновлён.`);
        break;
        case 'payment.canceled':
            currentStatus = OrderStatus.CANCELLED;
            console.log(`Оплата не прошла. Заказ №${orderId} отменён.`);
        break;
        case 'payment.failed':
            currentStatus = OrderStatus.CANCELLED;
            console.log(`Оплата не прошла. Заказ №${orderId} отменён.`);
        break;
        default:
            currentStatus = OrderStatus.PENDING
        break;
    }

    await prisma.order.update({
        where: { id: Number(orderId) },
        data: { status: currentStatus },
    });

    return NextResponse.json({ status: 200 });

  } catch (error) {
    console.error('Ошибка в webhook:', error);
    return NextResponse.json('Server error', { status: 500 });
  }
}
