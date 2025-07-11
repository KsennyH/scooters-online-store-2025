import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function up() {
    await prisma.news.createMany({
        data: [
            {
        title: "Электросамокаты нового поколения поступили в продажу",
        imageUrl: "/scooter-news1.png",
        images: [],
        content: "В продажу поступили электросамокаты нового поколения с увеличенным запасом хода и улучшенной подвеской. Модель особенно подойдет для езды по городским улицам и паркам.",
      },
      {
        title: "Как выбрать электросамокат для города — советы экспертов",
        imageUrl: "/scooter-news2.png",
        images: [],
        content: "Эксперты рассказали, на что обращать внимание при покупке электросамоката: мощность мотора, емкость аккумулятора и наличие амортизации — ключевые параметры при выборе модели.",
      },
      {
        title: "В Москве открылся новый сервис аренды электросамокатов",
        imageUrl: "/scooter-news3.png",
        images: [],
        content: "Сервис предлагает более 500 электросамокатов по всему центру города. Удобное приложение и гибкая система оплаты уже получили высокие оценки пользователей.",
      },
      {
        title: "ТОП-5 самых популярных моделей электросамокатов в 2025 году",
        imageUrl: "/scooter-news3.png",
        images: [],
        content: "Мы составили рейтинг самых популярных электросамокатов 2025 года. В списке — как бюджетные, так и премиальные модели с высокой надежностью и мощными батареями.",
      },
        ]
    });

    await prisma.category.createMany({
        data: [
            {
                name: "Электросамокаты",
                imageUrl: "/kugoo.png",
                slug: "elektrosamokaty"
            },
            {
                name: "Электровелосипеды",
                imageUrl: "/bike.png",
                slug: "elektrovelosipedy"
            },
            {
                name: "Гироскутеры",
                imageUrl: "/gyroscooter.png",
                slug: "giroskutery"
            },
            {
                name: "Моноколеса",
                imageUrl: "/mono.png",
                slug: "monokolesa"
            },
            {
                name: "Электроскейтборды",
                imageUrl: "/skate.png",
                slug: "elektroskejty"
            }
        ]
    });

    await prisma.product.createMany({
        data: [
            {
              "name": "Xiaomi Mi Electric Scooter Pro 2",
              "slug": "xiaomi-mi-electric-scooter-pro-2",
              "imageUrl": "/uploads/products/Xiaomi-Mi-Electric-Scooter-Pro-2.png",
              "images": [],
              "discount": 10,
              "inStock": true,
              "isNew": true,
              "description": "Надежный городской электросамокат с запасом хода до 45 км и круиз-контролем.",
              "price": 48900,
              "category_id": 1
            },
            {
              "name": "Kugoo M4 Pro",
              "slug": "kugoo-m4-pro",
              "imageUrl": "/uploads/products/Kugoo-M4-Pro.png",
              "images": [],
              "discount": 15,
              "inStock": true,
              "isNew": false,
              "description": "Складной электросамокат с сиденьем и мощным мотором 500 Вт.",
              "price": 52900,
              "category_id": 1
            },
            {
              "name": "Himo Z20 Электровелосипед",
              "slug": "himo-z20-elektrovelosiped",
              "imageUrl": "/uploads/products/Himo-Z20.png",
              "images": [],
              "discount": 5,
              "inStock": true,
              "isNew": true,
              "description": "Компактный электровелосипед с легкой рамой и запасом хода до 80 км.",
              "price": 68900,
              "category_id": 2
            },
            {
              "name": "Volteco Flex 20",
              "slug": "volteco-flex-20",
              "imageUrl": "/uploads/products/Volteco-Flex-20.png",
              "images": [],
              "discount": null,
              "inStock": false,
              "isNew": false,
              "description": "Складной электровелосипед с 500 Вт мотором и 3 режимами езды.",
              "price": 74500,
              "category_id": 2
            },
            {
              "name": "Smart Balance 10.5 V2",
              "slug": "smart-balance-10-5-v2",
              "imageUrl": "/uploads/products/Smart-Balance-V2.png",
              "images": [],
              "discount": 20,
              "inStock": true,
              "isNew": false,
              "description": "Гироскутер с широкими колесами и Bluetooth-динамиками.",
              "price": 22900,
              "category_id": 3
            },
            {
              "name": "Hoverbot C-1",
              "slug": "hoverbot-c-1",
              "imageUrl": "/uploads/products/Hoverbot-C-1.png",
              "images": [],
              "discount": 10,
              "inStock": true,
              "isNew": true,
              "description": "Яркий гироскутер с LED-подсветкой и авто балансировкой.",
              "price": 19900,
              "category_id": 3
            },
            {
              "name": "Evolve Bamboo GTR",
              "slug": "evolve-bamboo-gtr",
              "imageUrl": "/uploads/products/Evolve-Bamboo-GTR.png",
              "images": [],
              "discount": null,
              "inStock": true,
              "isNew": true,
              "description": "Мощный электроскейтборд с запасом хода до 50 км и сменными колесами.",
              "price": 109000,
              "category_id": 4
            },
            {
              "name": "Backfire G2 Black",
              "slug": "backfire-g2-black",
              "imageUrl": "/uploads/products/Backfire-G2-Black.png",
              "images": [],
              "discount": 5,
              "inStock": true,
              "isNew": false,
              "description": "Отличный выбор для новичков с плавным управлением и долговечной батареей.",
              "price": 59000,
              "category_id": 4
            },
            {
              "name": "Inmotion V10",
              "slug": "inmotion-v10",
              "imageUrl": "/uploads/products/Inmotion-V10.png",
              "images": [],
              "discount": 10,
              "inStock": true,
              "isNew": false,
              "description": "Моноколесо с боковой подсветкой, динамиками и скоростью до 40 км/ч.",
              "price": 99000,
              "category_id": 5
            },
            {
              "name": "Kingsong 16X",
              "slug": "kingsong-16x",
              "imageUrl": "/uploads/products/Kingsong-16X.png",
              "images": [],
              "discount": null,
              "inStock": true,
              "isNew": true,
              "description": "Флагманское моноколесо с дальностью до 150 км и отличной управляемостью.",
              "price": 139000,
              "category_id": 5
            },
            {
              "name": "Ninebot KickScooter Max G30",
              "slug": "ninebot-kickscooter-max-g30",
              "imageUrl": "/uploads/products/Ninebot-KickScooter-Max-G30.png",
              "images": [],
              "discount": 12,
              "inStock": true,
              "isNew": false,
              "description": "Универсальный самокат с дальностью до 65 км и быстрой зарядкой.",
              "price": 68900,
              "category_id": 1
            },
            {
              "name": "Joyor Y5S",
              "slug": "joyor-y5s",
              "imageUrl": "/uploads/products/Joyor-Y5S.png",
              "images": [],
              "discount": null,
              "inStock": true,
              "isNew": true,
              "description": "Электросамокат с амортизацией и мощным двигателем для повседневной езды.",
              "price": 61900,
              "category_id": 1
            },
            {
              "name": "Fiido D4S Электровелосипед",
              "slug": "fiido-d4s-elektrovelosiped",
              "imageUrl": "/uploads/products/Fiido-D4S.png",
              "images": [],
              "discount": 8,
              "inStock": true,
              "isNew": false,
              "description": "Складной и лёгкий электровелосипед для города и путешествий.",
              "price": 55500,
              "category_id": 2
            },
            {
              "name": "Shulz E-Go",
              "slug": "shulz-e-go",
              "imageUrl": "/uploads/products/Shulz-E-Go.png",
              "images": [],
              "discount": null,
              "inStock": false,
              "isNew": false,
              "description": "Современный электровелосипед с интегрированным аккумулятором и планетарной втулкой.",
              "price": 78900,
              "category_id": 2
            },
            {
              "name": "Smart Balance Wheel 6.5",
              "slug": "smart-balance-wheel-6-5",
              "imageUrl": "/uploads/products/Smart-Balance-Wheel.png",
              "images": [],
              "discount": 18,
              "inStock": true,
              "isNew": false,
              "description": "Классический гироскутер с авто балансом и отличной устойчивостью.",
              "price": 17500,
              "category_id": 3
            },
            {
              "name": "Hoverzon XLS",
              "slug": "hoverzon-xls",
              "imageUrl": "/uploads/products/Hoverzon-XLS.png",
              "images": [],
              "discount": null,
              "inStock": true,
              "isNew": true,
              "description": "Модель для детей и подростков с улучшенной защитой от перегрева.",
              "price": 18900,
              "category_id": 3
            },
            {
              "name": "Exway Flex Riot",
              "slug": "exway-flex-riot",
              "imageUrl": "/uploads/products/Exway-Flex-Riot.png",
              "images": [],
              "discount": 7,
              "inStock": true,
              "isNew": true,
              "description": "Лёгкий и манёвренный электроскейт для комфортной городской езды.",
              "price": 67000,
              "category_id": 4
            },
            {
              "name": "Meepo V4 Shuffle",
              "slug": "meepo-v4-shuffle",
              "imageUrl": "/uploads/products/Meepo-V4-Shuffle.png",
              "images": [],
              "discount": null,
              "inStock": true,
              "isNew": false,
              "description": "Скейт с резким разгоном и высокой управляемостью, идеален для фана.",
              "price": 52000,
              "category_id": 4
            },
            {
              "name": "Begode Tesla T3",
              "slug": "begode-tesla-t3",
              "imageUrl": "/uploads/products/Begode-Tesla-T3.png",
              "images": [],
              "discount": 5,
              "inStock": true,
              "isNew": true,
              "description": "Компактное моноколесо с хорошей динамикой и влагозащитой.",
              "price": 95000,
              "category_id": 5
            },
            {
              "name": "Gotway Nikola AR+",
              "slug": "gotway-nikola-ar-plus",
              "imageUrl": "/uploads/products/Gotway-Nikola-AR.png",
              "images": [],
              "discount": 10,
              "inStock": false,
              "isNew": false,
              "description": "Моноколесо премиум-класса с RGB-подсветкой и огромным запасом хода.",
              "price": 129000,
              "category_id": 5
            }
        ]
    })
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "News" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
}

async function main() {
    try{
      await down();
      await up();
    } catch(e) {
      console.error(e);
    }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

