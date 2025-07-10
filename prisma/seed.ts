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
            },
            {
                name: "Электровелосипеды",
                imageUrl: "/bike.png",
            },
            {
                name: "Гироскутеры",
                imageUrl: "/gyroscooter.png",
            },
            {
                name: "Моноколеса",
                imageUrl: "/mono.png",
            },
            {
                name: "Электроскейтборды",
                imageUrl: "/skate.png",
            }
        ]
    });

    await prisma.product.createMany({
        data: [
            {
    "name": "Xiaomi Mi Electric Scooter Pro 2",
    "slug": "xiaomi-mi-electric-scooter-pro-2",
    "imageUrl": "https://cdn.pixabay.com/photo/2020/05/08/16/38/electric-scooter-5145133_1280.jpg",
    "images": ["https://cdn.pixabay.com/photo/2020/05/08/16/38/electric-scooter-5145133_1280.jpg"],
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
    "imageUrl": "https://cdn.pixabay.com/photo/2021/06/07/09/13/electric-scooter-6316457_1280.jpg",
    "images": ["https://cdn.pixabay.com/photo/2021/06/07/09/13/electric-scooter-6316457_1280.jpg"],
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
    "imageUrl": "https://cdn.pixabay.com/photo/2018/05/08/22/57/e-bike-3384464_1280.jpg",
    "images": ["https://cdn.pixabay.com/photo/2018/05/08/22/57/e-bike-3384464_1280.jpg"],
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
    "imageUrl": "https://cdn.pixabay.com/photo/2019/05/03/16/58/e-bike-4175839_1280.jpg",
    "images": ["https://cdn.pixabay.com/photo/2019/05/03/16/58/e-bike-4175839_1280.jpg"],
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
    "imageUrl": "https://cdn.pixabay.com/photo/2020/04/17/19/48/hoverboard-5056086_1280.jpg",
    "images": ["https://cdn.pixabay.com/photo/2020/04/17/19/48/hoverboard-5056086_1280.jpg"],
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
    "imageUrl": "https://cdn.pixabay.com/photo/2016/06/09/22/17/hoverboard-1448595_1280.jpg",
    "images": ["https://cdn.pixabay.com/photo/2016/06/09/22/17/hoverboard-1448595_1280.jpg"],
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
    "imageUrl": "https://cdn.pixabay.com/photo/2020/10/21/16/49/electric-skateboard-5673616_1280.jpg",
    "images": ["https://cdn.pixabay.com/photo/2020/10/21/16/49/electric-skateboard-5673616_1280.jpg"],
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
    "imageUrl": "https://cdn.pixabay.com/photo/2020/07/01/07/41/skateboard-5359551_1280.jpg",
    "images": ["https://cdn.pixabay.com/photo/2020/07/01/07/41/skateboard-5359551_1280.jpg"],
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
    "imageUrl": "https://cdn.pixabay.com/photo/2020/06/02/17/56/electric-unicycle-5252536_1280.jpg",
    "images": ["https://cdn.pixabay.com/photo/2020/06/02/17/56/electric-unicycle-5252536_1280.jpg"],
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
    "imageUrl": "https://cdn.pixabay.com/photo/2020/05/01/20/55/unicycle-5117888_1280.jpg",
    "images": ["https://cdn.pixabay.com/photo/2020/05/01/20/55/unicycle-5117888_1280.jpg"],
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
    "imageUrl": "https://cdn.pixabay.com/photo/2020/08/07/19/24/scooter-5472191_1280.jpg",
    "images": ["https://cdn.pixabay.com/photo/2020/08/07/19/24/scooter-5472191_1280.jpg"],
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
    "imageUrl": "https://cdn.pixabay.com/photo/2021/03/04/21/12/electric-scooter-6069086_1280.jpg",
    "images": ["https://cdn.pixabay.com/photo/2021/03/04/21/12/electric-scooter-6069086_1280.jpg"],
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
    "imageUrl": "https://cdn.pixabay.com/photo/2020/08/24/18/38/e-bike-5514419_1280.jpg",
    "images": ["https://cdn.pixabay.com/photo/2020/08/24/18/38/e-bike-5514419_1280.jpg"],
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
    "imageUrl": "https://cdn.pixabay.com/photo/2019/10/29/17/15/e-bike-4587208_1280.jpg",
    "images": ["https://cdn.pixabay.com/photo/2019/10/29/17/15/e-bike-4587208_1280.jpg"],
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
    "imageUrl": "https://cdn.pixabay.com/photo/2016/10/13/17/36/hoverboard-1739664_1280.jpg",
    "images": ["https://cdn.pixabay.com/photo/2016/10/13/17/36/hoverboard-1739664_1280.jpg"],
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
    "imageUrl": "https://cdn.pixabay.com/photo/2017/05/10/22/46/hoverboard-2300760_1280.jpg",
    "images": ["https://cdn.pixabay.com/photo/2017/05/10/22/46/hoverboard-2300760_1280.jpg"],
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
    "imageUrl": "https://cdn.pixabay.com/photo/2022/01/03/19/50/skateboard-6912153_1280.jpg",
    "images": ["https://cdn.pixabay.com/photo/2022/01/03/19/50/skateboard-6912153_1280.jpg"],
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
    "imageUrl": "https://cdn.pixabay.com/photo/2018/03/01/12/50/skateboard-3182855_1280.jpg",
    "images": ["https://cdn.pixabay.com/photo/2018/03/01/12/50/skateboard-3182855_1280.jpg"],
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
    "imageUrl": "https://cdn.pixabay.com/photo/2020/06/02/17/57/unicycle-5252537_1280.jpg",
    "images": ["https://cdn.pixabay.com/photo/2020/06/02/17/57/unicycle-5252537_1280.jpg"],
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
    "imageUrl": "https://cdn.pixabay.com/photo/2020/05/03/14/14/unicycle-5126472_1280.jpg",
    "images": ["https://cdn.pixabay.com/photo/2020/05/03/14/14/unicycle-5126472_1280.jpg"],
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
    
}

async function main() {
    
}

