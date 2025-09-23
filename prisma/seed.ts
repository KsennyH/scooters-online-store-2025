import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt';

const prisma = new PrismaClient();

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullname: "Admin",
                email: "admin@test.ru",
                password: hashSync("111111", 10),
                role: "ADMIN",
                verified: new Date(),
            },
            {
                fullname: "User",
                email: "user@test.ru",
                password: hashSync("222222", 10),
                role: "USER",
                verified: new Date(),
            }
        ]
    });
    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: '111111'
            },
            {
                userId: 2,
                totalAmount: 0,
                token: '222222'
            }
        ]
    });
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
                name: "Электроскейтборды",
                imageUrl: "/skate.png",
                slug: "elektroskejty"
            },
            {
                name: "Моноколеса",
                imageUrl: "/mono.png",
                slug: "monokolesa"
            }
        ]
    });

    await prisma.product.createMany({
        data: [
            {
              "name": "Xiaomi Mi Electric Scooter Pro 2",
              "slug": "xiaomi-mi-electric-scooter-pro-2",
              "imageUrl": "/uploads/products/Xiaomi-Mi-Electric-Scooter-Pro-2.png",
              "images": ["/uploads/products/Xiaomi-Mi-Electric-Scooter-Pro-2.png", "/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Begode-Tesla-T3.png"],
              "discount": 10,
              "inStock": true,
              "isNew": true,
              "description": "Надежный городской электросамокат с запасом хода до 45 км и круиз-контролем. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni recusandae corrupti repudiandae totam necessitatibus quis id modi, dolorum pariatur dignissimos hic inventore doloribus? Quas perspiciatis ea aspernatur fugiat alias.Non sapiente molestias libero maiores eligendi hic qui nobis aut et. Doloremque, consequatur! Enim consequatur accusantium qui ipsam numquam, similique laboriosam cupiditate dicta quidem eaque, nesciunt quo aspernatur tenetur assumenda.Accusantium cum dolore facere. Tempora cum eaque illo. Culpa cupiditate, ut doloremque reiciendis sit velit maxime consequuntur placeat praesentium deserunt vel, quibusdam soluta itaque quia! Natus doloremque qui fugit placeat.Nihil ipsa aut earum facilis voluptate? Enim, nisi nostrum provident autem ex eius optio nam? Dolorum nemo ex velit. Laboriosam quaerat illum non praesentium nisi repellat eveniet facere molestias optio.Tempore quam error hic eius recusandae fugiat sapiente cupiditate laboriosam earum repellat, soluta vero vel quas sequi nobis cumque assumenda sunt quaerat quis officia veniam ipsam repellendus possimus? Modi, ipsa.Voluptas asperiores unde iusto illum quidem neque corporis aspernatur, sint veritatis nam aliquid dignissimos repellat non quibusdam nisi nihil pariatur, ullam, officia autem at. Veniam culpa quia asperiores porro? Velit.Eveniet, amet. Mollitia labore, modi ratione deleniti molestiae perspiciatis tempora blanditiis. Eaque eum, repellendus quae dolor quia dolore distinctio asperiores, fuga voluptas odio, autem dicta! In soluta nostrum vel exercitationem?Deserunt dolores perferendis recusandae nobis voluptatum dignissimos mollitia, minus harum eos quibusdam natus numquam aperiam debitis temporibus totam error et? Quis facere laborum libero ipsum officia eligendi eum dolore autem!Culpa adipisci suscipit excepturi asperiores fugiat saepe at, maxime cumque recusandae sit, labore quas, eveniet sed. Rerum consequuntur iusto, sapiente est id veniam doloribus aliquam ex provident harum, vitae minima?Illum temporibus sit qui. Dolores consequatur ab doloremque vero, nostrum, facilis similique repellat corrupti veniam earum laborum qui totam, tempore ut eaque. Eaque dolores ducimus perferendis alias aspernatur architecto? Dolore.",
              "price": 48900,
              "category_id": 1
            },
            {
              "name": "Kugoo M4 Pro",
              "slug": "kugoo-m4-pro",
              "imageUrl": "/uploads/products/Kugoo-M4-Pro.png",
              "images": ["/uploads/products/Kugoo-M4-Pro.png", "/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Begode-Tesla-T3.png"],
              "discount": 15,
              "inStock": true,
              "isNew": false,
              "description": "Складной электросамокат с сиденьем и мощным мотором 500 Вт. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni recusandae corrupti repudiandae totam necessitatibus quis id modi, dolorum pariatur dignissimos hic inventore doloribus? Quas perspiciatis ea aspernatur fugiat alias.Non sapiente molestias libero maiores eligendi hic qui nobis aut et. Doloremque, consequatur! Enim consequatur accusantium qui ipsam numquam, similique laboriosam cupiditate dicta quidem eaque, nesciunt quo aspernatur tenetur assumenda.Accusantium cum dolore facere. Tempora cum eaque illo. Culpa cupiditate, ut doloremque reiciendis sit velit maxime consequuntur placeat praesentium deserunt vel, quibusdam soluta itaque quia! Natus doloremque qui fugit placeat.Nihil ipsa aut earum facilis voluptate? Enim, nisi nostrum provident autem ex eius optio nam? Dolorum nemo ex velit. Laboriosam quaerat illum non praesentium nisi repellat eveniet facere molestias optio.Tempore quam error hic eius recusandae fugiat sapiente cupiditate laboriosam earum repellat, soluta vero vel quas sequi nobis cumque assumenda sunt quaerat quis officia veniam ipsam repellendus possimus? Modi, ipsa.Voluptas asperiores unde iusto illum quidem neque corporis aspernatur, sint veritatis nam aliquid dignissimos repellat non quibusdam nisi nihil pariatur, ullam, officia autem at. Veniam culpa quia asperiores porro? Velit.Eveniet, amet. Mollitia labore, modi ratione deleniti molestiae perspiciatis tempora blanditiis. Eaque eum, repellendus quae dolor quia dolore distinctio asperiores, fuga voluptas odio, autem dicta! In soluta nostrum vel exercitationem?Deserunt dolores perferendis recusandae nobis voluptatum dignissimos mollitia, minus harum eos quibusdam natus numquam aperiam debitis temporibus totam error et? Quis facere laborum libero ipsum officia eligendi eum dolore autem!Culpa adipisci suscipit excepturi asperiores fugiat saepe at, maxime cumque recusandae sit, labore quas, eveniet sed. Rerum consequuntur iusto, sapiente est id veniam doloribus aliquam ex provident harum, vitae minima?Illum temporibus sit qui. Dolores consequatur ab doloremque vero, nostrum, facilis similique repellat corrupti veniam earum laborum qui totam, tempore ut eaque. Eaque dolores ducimus perferendis alias aspernatur architecto? Dolore.",
              "price": 52900,
              "category_id": 1
            },
            {
              "name": "Himo Z20 Электровелосипед",
              "slug": "himo-z20-elektrovelosiped",
              "imageUrl": "/uploads/products/Himo-Z20.png",
              "images": ["/uploads/products/Himo-Z20.png", "/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Begode-Tesla-T3.png"],
              "discount": 5,
              "inStock": true,
              "isNew": true,
              "description": "Компактный электровелосипед с легкой рамой и запасом хода до 80 км. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni recusandae corrupti repudiandae totam necessitatibus quis id modi, dolorum pariatur dignissimos hic inventore doloribus? Quas perspiciatis ea aspernatur fugiat alias.Non sapiente molestias libero maiores eligendi hic qui nobis aut et. Doloremque, consequatur! Enim consequatur accusantium qui ipsam numquam, similique laboriosam cupiditate dicta quidem eaque, nesciunt quo aspernatur tenetur assumenda.Accusantium cum dolore facere. Tempora cum eaque illo. Culpa cupiditate, ut doloremque reiciendis sit velit maxime consequuntur placeat praesentium deserunt vel, quibusdam soluta itaque quia! Natus doloremque qui fugit placeat.Nihil ipsa aut earum facilis voluptate? Enim, nisi nostrum provident autem ex eius optio nam? Dolorum nemo ex velit. Laboriosam quaerat illum non praesentium nisi repellat eveniet facere molestias optio.Tempore quam error hic eius recusandae fugiat sapiente cupiditate laboriosam earum repellat, soluta vero vel quas sequi nobis cumque assumenda sunt quaerat quis officia veniam ipsam repellendus possimus? Modi, ipsa.Voluptas asperiores unde iusto illum quidem neque corporis aspernatur, sint veritatis nam aliquid dignissimos repellat non quibusdam nisi nihil pariatur, ullam, officia autem at. Veniam culpa quia asperiores porro? Velit.Eveniet, amet. Mollitia labore, modi ratione deleniti molestiae perspiciatis tempora blanditiis. Eaque eum, repellendus quae dolor quia dolore distinctio asperiores, fuga voluptas odio, autem dicta! In soluta nostrum vel exercitationem?Deserunt dolores perferendis recusandae nobis voluptatum dignissimos mollitia, minus harum eos quibusdam natus numquam aperiam debitis temporibus totam error et? Quis facere laborum libero ipsum officia eligendi eum dolore autem!Culpa adipisci suscipit excepturi asperiores fugiat saepe at, maxime cumque recusandae sit, labore quas, eveniet sed. Rerum consequuntur iusto, sapiente est id veniam doloribus aliquam ex provident harum, vitae minima?Illum temporibus sit qui. Dolores consequatur ab doloremque vero, nostrum, facilis similique repellat corrupti veniam earum laborum qui totam, tempore ut eaque. Eaque dolores ducimus perferendis alias aspernatur architecto? Dolore.",
              "price": 68900,
              "category_id": 2
            },
            {
              "name": "Volteco Flex 20",
              "slug": "volteco-flex-20",
              "imageUrl": "/uploads/products/Volteco-Flex-20.png",
              "images": ["/uploads/products/Volteco-Flex-20.png", "/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Begode-Tesla-T3.png"],
              "discount": null,
              "inStock": false,
              "isNew": false,
              "description": "Складной электровелосипед с 500 Вт мотором и 3 режимами езды. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni recusandae corrupti repudiandae totam necessitatibus quis id modi, dolorum pariatur dignissimos hic inventore doloribus? Quas perspiciatis ea aspernatur fugiat alias.Non sapiente molestias libero maiores eligendi hic qui nobis aut et. Doloremque, consequatur! Enim consequatur accusantium qui ipsam numquam, similique laboriosam cupiditate dicta quidem eaque, nesciunt quo aspernatur tenetur assumenda.Accusantium cum dolore facere. Tempora cum eaque illo. Culpa cupiditate, ut doloremque reiciendis sit velit maxime consequuntur placeat praesentium deserunt vel, quibusdam soluta itaque quia! Natus doloremque qui fugit placeat.Nihil ipsa aut earum facilis voluptate? Enim, nisi nostrum provident autem ex eius optio nam? Dolorum nemo ex velit. Laboriosam quaerat illum non praesentium nisi repellat eveniet facere molestias optio.Tempore quam error hic eius recusandae fugiat sapiente cupiditate laboriosam earum repellat, soluta vero vel quas sequi nobis cumque assumenda sunt quaerat quis officia veniam ipsam repellendus possimus? Modi, ipsa.Voluptas asperiores unde iusto illum quidem neque corporis aspernatur, sint veritatis nam aliquid dignissimos repellat non quibusdam nisi nihil pariatur, ullam, officia autem at. Veniam culpa quia asperiores porro? Velit.Eveniet, amet. Mollitia labore, modi ratione deleniti molestiae perspiciatis tempora blanditiis. Eaque eum, repellendus quae dolor quia dolore distinctio asperiores, fuga voluptas odio, autem dicta! In soluta nostrum vel exercitationem?Deserunt dolores perferendis recusandae nobis voluptatum dignissimos mollitia, minus harum eos quibusdam natus numquam aperiam debitis temporibus totam error et? Quis facere laborum libero ipsum officia eligendi eum dolore autem!Culpa adipisci suscipit excepturi asperiores fugiat saepe at, maxime cumque recusandae sit, labore quas, eveniet sed. Rerum consequuntur iusto, sapiente est id veniam doloribus aliquam ex provident harum, vitae minima?Illum temporibus sit qui. Dolores consequatur ab doloremque vero, nostrum, facilis similique repellat corrupti veniam earum laborum qui totam, tempore ut eaque. Eaque dolores ducimus perferendis alias aspernatur architecto? Dolore.",
              "price": 74500,
              "category_id": 2
            },
            {
              "name": "Smart Balance 10.5 V2",
              "slug": "smart-balance-10-5-v2",
              "imageUrl": "/uploads/products/Smart-Balance-V2.png",
              "images": ["/uploads/products/Smart-Balance-V2.png", "/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Begode-Tesla-T3.png"],
              "discount": 20,
              "inStock": true,
              "isNew": false,
              "description": "Гироскутер с широкими колесами и Bluetooth-динамиками. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni recusandae corrupti repudiandae totam necessitatibus quis id modi, dolorum pariatur dignissimos hic inventore doloribus? Quas perspiciatis ea aspernatur fugiat alias.Non sapiente molestias libero maiores eligendi hic qui nobis aut et. Doloremque, consequatur! Enim consequatur accusantium qui ipsam numquam, similique laboriosam cupiditate dicta quidem eaque, nesciunt quo aspernatur tenetur assumenda.Accusantium cum dolore facere. Tempora cum eaque illo. Culpa cupiditate, ut doloremque reiciendis sit velit maxime consequuntur placeat praesentium deserunt vel, quibusdam soluta itaque quia! Natus doloremque qui fugit placeat.Nihil ipsa aut earum facilis voluptate? Enim, nisi nostrum provident autem ex eius optio nam? Dolorum nemo ex velit. Laboriosam quaerat illum non praesentium nisi repellat eveniet facere molestias optio.Tempore quam error hic eius recusandae fugiat sapiente cupiditate laboriosam earum repellat, soluta vero vel quas sequi nobis cumque assumenda sunt quaerat quis officia veniam ipsam repellendus possimus? Modi, ipsa.Voluptas asperiores unde iusto illum quidem neque corporis aspernatur, sint veritatis nam aliquid dignissimos repellat non quibusdam nisi nihil pariatur, ullam, officia autem at. Veniam culpa quia asperiores porro? Velit.Eveniet, amet. Mollitia labore, modi ratione deleniti molestiae perspiciatis tempora blanditiis. Eaque eum, repellendus quae dolor quia dolore distinctio asperiores, fuga voluptas odio, autem dicta! In soluta nostrum vel exercitationem?Deserunt dolores perferendis recusandae nobis voluptatum dignissimos mollitia, minus harum eos quibusdam natus numquam aperiam debitis temporibus totam error et? Quis facere laborum libero ipsum officia eligendi eum dolore autem!Culpa adipisci suscipit excepturi asperiores fugiat saepe at, maxime cumque recusandae sit, labore quas, eveniet sed. Rerum consequuntur iusto, sapiente est id veniam doloribus aliquam ex provident harum, vitae minima?Illum temporibus sit qui. Dolores consequatur ab doloremque vero, nostrum, facilis similique repellat corrupti veniam earum laborum qui totam, tempore ut eaque. Eaque dolores ducimus perferendis alias aspernatur architecto? Dolore.",
              "price": 22900,
              "category_id": 3
            },
            {
              "name": "Hoverbot C-1",
              "slug": "hoverbot-c-1",
              "imageUrl": "/uploads/products/Hoverbot-C-1.png",
              "images": ["/uploads/products/Hoverbot-C-1.png", "/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Begode-Tesla-T3.png"],
              "discount": 10,
              "inStock": true,
              "isNew": true,
              "description": "Яркий гироскутер с LED-подсветкой и авто балансировкой. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni recusandae corrupti repudiandae totam necessitatibus quis id modi, dolorum pariatur dignissimos hic inventore doloribus? Quas perspiciatis ea aspernatur fugiat alias.Non sapiente molestias libero maiores eligendi hic qui nobis aut et. Doloremque, consequatur! Enim consequatur accusantium qui ipsam numquam, similique laboriosam cupiditate dicta quidem eaque, nesciunt quo aspernatur tenetur assumenda.Accusantium cum dolore facere. Tempora cum eaque illo. Culpa cupiditate, ut doloremque reiciendis sit velit maxime consequuntur placeat praesentium deserunt vel, quibusdam soluta itaque quia! Natus doloremque qui fugit placeat.Nihil ipsa aut earum facilis voluptate? Enim, nisi nostrum provident autem ex eius optio nam? Dolorum nemo ex velit. Laboriosam quaerat illum non praesentium nisi repellat eveniet facere molestias optio.Tempore quam error hic eius recusandae fugiat sapiente cupiditate laboriosam earum repellat, soluta vero vel quas sequi nobis cumque assumenda sunt quaerat quis officia veniam ipsam repellendus possimus? Modi, ipsa.Voluptas asperiores unde iusto illum quidem neque corporis aspernatur, sint veritatis nam aliquid dignissimos repellat non quibusdam nisi nihil pariatur, ullam, officia autem at. Veniam culpa quia asperiores porro? Velit.Eveniet, amet. Mollitia labore, modi ratione deleniti molestiae perspiciatis tempora blanditiis. Eaque eum, repellendus quae dolor quia dolore distinctio asperiores, fuga voluptas odio, autem dicta! In soluta nostrum vel exercitationem?Deserunt dolores perferendis recusandae nobis voluptatum dignissimos mollitia, minus harum eos quibusdam natus numquam aperiam debitis temporibus totam error et? Quis facere laborum libero ipsum officia eligendi eum dolore autem!Culpa adipisci suscipit excepturi asperiores fugiat saepe at, maxime cumque recusandae sit, labore quas, eveniet sed. Rerum consequuntur iusto, sapiente est id veniam doloribus aliquam ex provident harum, vitae minima?Illum temporibus sit qui. Dolores consequatur ab doloremque vero, nostrum, facilis similique repellat corrupti veniam earum laborum qui totam, tempore ut eaque. Eaque dolores ducimus perferendis alias aspernatur architecto? Dolore.",
              "price": 19900,
              "category_id": 3
            },
            {
              "name": "Evolve Bamboo GTR",
              "slug": "evolve-bamboo-gtr",
              "imageUrl": "/uploads/products/Evolve-Bamboo-GTR.png",
              "images": ["/uploads/products/Evolve-Bamboo-GTR.png", "/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Begode-Tesla-T3.png"],
              "discount": null,
              "inStock": true,
              "isNew": true,
              "description": "Мощный электроскейтборд с запасом хода до 50 км и сменными колесами. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni recusandae corrupti repudiandae totam necessitatibus quis id modi, dolorum pariatur dignissimos hic inventore doloribus? Quas perspiciatis ea aspernatur fugiat alias.Non sapiente molestias libero maiores eligendi hic qui nobis aut et. Doloremque, consequatur! Enim consequatur accusantium qui ipsam numquam, similique laboriosam cupiditate dicta quidem eaque, nesciunt quo aspernatur tenetur assumenda.Accusantium cum dolore facere. Tempora cum eaque illo. Culpa cupiditate, ut doloremque reiciendis sit velit maxime consequuntur placeat praesentium deserunt vel, quibusdam soluta itaque quia! Natus doloremque qui fugit placeat.Nihil ipsa aut earum facilis voluptate? Enim, nisi nostrum provident autem ex eius optio nam? Dolorum nemo ex velit. Laboriosam quaerat illum non praesentium nisi repellat eveniet facere molestias optio.Tempore quam error hic eius recusandae fugiat sapiente cupiditate laboriosam earum repellat, soluta vero vel quas sequi nobis cumque assumenda sunt quaerat quis officia veniam ipsam repellendus possimus? Modi, ipsa.Voluptas asperiores unde iusto illum quidem neque corporis aspernatur, sint veritatis nam aliquid dignissimos repellat non quibusdam nisi nihil pariatur, ullam, officia autem at. Veniam culpa quia asperiores porro? Velit.Eveniet, amet. Mollitia labore, modi ratione deleniti molestiae perspiciatis tempora blanditiis. Eaque eum, repellendus quae dolor quia dolore distinctio asperiores, fuga voluptas odio, autem dicta! In soluta nostrum vel exercitationem?Deserunt dolores perferendis recusandae nobis voluptatum dignissimos mollitia, minus harum eos quibusdam natus numquam aperiam debitis temporibus totam error et? Quis facere laborum libero ipsum officia eligendi eum dolore autem!Culpa adipisci suscipit excepturi asperiores fugiat saepe at, maxime cumque recusandae sit, labore quas, eveniet sed. Rerum consequuntur iusto, sapiente est id veniam doloribus aliquam ex provident harum, vitae minima?Illum temporibus sit qui. Dolores consequatur ab doloremque vero, nostrum, facilis similique repellat corrupti veniam earum laborum qui totam, tempore ut eaque. Eaque dolores ducimus perferendis alias aspernatur architecto? Dolore.",
              "price": 109000,
              "category_id": 4
            },
            {
              "name": "Backfire G2 Black",
              "slug": "backfire-g2-black",
              "imageUrl": "/uploads/products/Backfire-G2-Black.png",
              "images": ["/uploads/products/Backfire-G2-Black.png", "/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Begode-Tesla-T3.png"],
              "discount": 5,
              "inStock": true,
              "isNew": false,
              "description": "Отличный выбор для новичков с плавным управлением и долговечной батареей. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni recusandae corrupti repudiandae totam necessitatibus quis id modi, dolorum pariatur dignissimos hic inventore doloribus? Quas perspiciatis ea aspernatur fugiat alias.Non sapiente molestias libero maiores eligendi hic qui nobis aut et. Doloremque, consequatur! Enim consequatur accusantium qui ipsam numquam, similique laboriosam cupiditate dicta quidem eaque, nesciunt quo aspernatur tenetur assumenda.Accusantium cum dolore facere. Tempora cum eaque illo. Culpa cupiditate, ut doloremque reiciendis sit velit maxime consequuntur placeat praesentium deserunt vel, quibusdam soluta itaque quia! Natus doloremque qui fugit placeat.Nihil ipsa aut earum facilis voluptate? Enim, nisi nostrum provident autem ex eius optio nam? Dolorum nemo ex velit. Laboriosam quaerat illum non praesentium nisi repellat eveniet facere molestias optio.Tempore quam error hic eius recusandae fugiat sapiente cupiditate laboriosam earum repellat, soluta vero vel quas sequi nobis cumque assumenda sunt quaerat quis officia veniam ipsam repellendus possimus? Modi, ipsa.Voluptas asperiores unde iusto illum quidem neque corporis aspernatur, sint veritatis nam aliquid dignissimos repellat non quibusdam nisi nihil pariatur, ullam, officia autem at. Veniam culpa quia asperiores porro? Velit.Eveniet, amet. Mollitia labore, modi ratione deleniti molestiae perspiciatis tempora blanditiis. Eaque eum, repellendus quae dolor quia dolore distinctio asperiores, fuga voluptas odio, autem dicta! In soluta nostrum vel exercitationem?Deserunt dolores perferendis recusandae nobis voluptatum dignissimos mollitia, minus harum eos quibusdam natus numquam aperiam debitis temporibus totam error et? Quis facere laborum libero ipsum officia eligendi eum dolore autem!Culpa adipisci suscipit excepturi asperiores fugiat saepe at, maxime cumque recusandae sit, labore quas, eveniet sed. Rerum consequuntur iusto, sapiente est id veniam doloribus aliquam ex provident harum, vitae minima?Illum temporibus sit qui. Dolores consequatur ab doloremque vero, nostrum, facilis similique repellat corrupti veniam earum laborum qui totam, tempore ut eaque. Eaque dolores ducimus perferendis alias aspernatur architecto? Dolore.",
              "price": 59000,
              "category_id": 4
            },
            {
              "name": "Inmotion V10",
              "slug": "inmotion-v10",
              "imageUrl": "/uploads/products/Inmotion-V10.png",
              "images": ["/uploads/products/Inmotion-V10.png", "/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Begode-Tesla-T3.png"],
              "discount": 10,
              "inStock": true,
              "isNew": false,
              "description": "Моноколесо с боковой подсветкой, динамиками и скоростью до 40 км/ч. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni recusandae corrupti repudiandae totam necessitatibus quis id modi, dolorum pariatur dignissimos hic inventore doloribus? Quas perspiciatis ea aspernatur fugiat alias.Non sapiente molestias libero maiores eligendi hic qui nobis aut et. Doloremque, consequatur! Enim consequatur accusantium qui ipsam numquam, similique laboriosam cupiditate dicta quidem eaque, nesciunt quo aspernatur tenetur assumenda.Accusantium cum dolore facere. Tempora cum eaque illo. Culpa cupiditate, ut doloremque reiciendis sit velit maxime consequuntur placeat praesentium deserunt vel, quibusdam soluta itaque quia! Natus doloremque qui fugit placeat.Nihil ipsa aut earum facilis voluptate? Enim, nisi nostrum provident autem ex eius optio nam? Dolorum nemo ex velit. Laboriosam quaerat illum non praesentium nisi repellat eveniet facere molestias optio.Tempore quam error hic eius recusandae fugiat sapiente cupiditate laboriosam earum repellat, soluta vero vel quas sequi nobis cumque assumenda sunt quaerat quis officia veniam ipsam repellendus possimus? Modi, ipsa.Voluptas asperiores unde iusto illum quidem neque corporis aspernatur, sint veritatis nam aliquid dignissimos repellat non quibusdam nisi nihil pariatur, ullam, officia autem at. Veniam culpa quia asperiores porro? Velit.Eveniet, amet. Mollitia labore, modi ratione deleniti molestiae perspiciatis tempora blanditiis. Eaque eum, repellendus quae dolor quia dolore distinctio asperiores, fuga voluptas odio, autem dicta! In soluta nostrum vel exercitationem?Deserunt dolores perferendis recusandae nobis voluptatum dignissimos mollitia, minus harum eos quibusdam natus numquam aperiam debitis temporibus totam error et? Quis facere laborum libero ipsum officia eligendi eum dolore autem!Culpa adipisci suscipit excepturi asperiores fugiat saepe at, maxime cumque recusandae sit, labore quas, eveniet sed. Rerum consequuntur iusto, sapiente est id veniam doloribus aliquam ex provident harum, vitae minima?Illum temporibus sit qui. Dolores consequatur ab doloremque vero, nostrum, facilis similique repellat corrupti veniam earum laborum qui totam, tempore ut eaque. Eaque dolores ducimus perferendis alias aspernatur architecto? Dolore.",
              "price": 99000,
              "category_id": 5
            },
            {
              "name": "Kingsong 16X",
              "slug": "kingsong-16x",
              "imageUrl": "/uploads/products/Kingsong-16X.png",
              "images": ["/uploads/products/Kingsong-16X.png", "/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Begode-Tesla-T3.png"],
              "discount": null,
              "inStock": true,
              "isNew": true,
              "description": "Флагманское моноколесо с дальностью до 150 км и отличной управляемостью. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni recusandae corrupti repudiandae totam necessitatibus quis id modi, dolorum pariatur dignissimos hic inventore doloribus? Quas perspiciatis ea aspernatur fugiat alias.Non sapiente molestias libero maiores eligendi hic qui nobis aut et. Doloremque, consequatur! Enim consequatur accusantium qui ipsam numquam, similique laboriosam cupiditate dicta quidem eaque, nesciunt quo aspernatur tenetur assumenda.Accusantium cum dolore facere. Tempora cum eaque illo. Culpa cupiditate, ut doloremque reiciendis sit velit maxime consequuntur placeat praesentium deserunt vel, quibusdam soluta itaque quia! Natus doloremque qui fugit placeat.Nihil ipsa aut earum facilis voluptate? Enim, nisi nostrum provident autem ex eius optio nam? Dolorum nemo ex velit. Laboriosam quaerat illum non praesentium nisi repellat eveniet facere molestias optio.Tempore quam error hic eius recusandae fugiat sapiente cupiditate laboriosam earum repellat, soluta vero vel quas sequi nobis cumque assumenda sunt quaerat quis officia veniam ipsam repellendus possimus? Modi, ipsa.Voluptas asperiores unde iusto illum quidem neque corporis aspernatur, sint veritatis nam aliquid dignissimos repellat non quibusdam nisi nihil pariatur, ullam, officia autem at. Veniam culpa quia asperiores porro? Velit.Eveniet, amet. Mollitia labore, modi ratione deleniti molestiae perspiciatis tempora blanditiis. Eaque eum, repellendus quae dolor quia dolore distinctio asperiores, fuga voluptas odio, autem dicta! In soluta nostrum vel exercitationem?Deserunt dolores perferendis recusandae nobis voluptatum dignissimos mollitia, minus harum eos quibusdam natus numquam aperiam debitis temporibus totam error et? Quis facere laborum libero ipsum officia eligendi eum dolore autem!Culpa adipisci suscipit excepturi asperiores fugiat saepe at, maxime cumque recusandae sit, labore quas, eveniet sed. Rerum consequuntur iusto, sapiente est id veniam doloribus aliquam ex provident harum, vitae minima?Illum temporibus sit qui. Dolores consequatur ab doloremque vero, nostrum, facilis similique repellat corrupti veniam earum laborum qui totam, tempore ut eaque. Eaque dolores ducimus perferendis alias aspernatur architecto? Dolore.",
              "price": 139000,
              "category_id": 5
            },
            {
              "name": "Ninebot KickScooter Max G30",
              "slug": "ninebot-kickscooter-max-g30",
              "imageUrl": "/uploads/products/Ninebot-KickScooter-Max-G30.png",
              "images": ["/uploads/products/Ninebot-KickScooter-Max-G30.png", "/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Begode-Tesla-T3.png"],
              "discount": 12,
              "inStock": true,
              "isNew": false,
              "description": "Универсальный самокат с дальностью до 65 км и быстрой зарядкой. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni recusandae corrupti repudiandae totam necessitatibus quis id modi, dolorum pariatur dignissimos hic inventore doloribus? Quas perspiciatis ea aspernatur fugiat alias.Non sapiente molestias libero maiores eligendi hic qui nobis aut et. Doloremque, consequatur! Enim consequatur accusantium qui ipsam numquam, similique laboriosam cupiditate dicta quidem eaque, nesciunt quo aspernatur tenetur assumenda.Accusantium cum dolore facere. Tempora cum eaque illo. Culpa cupiditate, ut doloremque reiciendis sit velit maxime consequuntur placeat praesentium deserunt vel, quibusdam soluta itaque quia! Natus doloremque qui fugit placeat.Nihil ipsa aut earum facilis voluptate? Enim, nisi nostrum provident autem ex eius optio nam? Dolorum nemo ex velit. Laboriosam quaerat illum non praesentium nisi repellat eveniet facere molestias optio.Tempore quam error hic eius recusandae fugiat sapiente cupiditate laboriosam earum repellat, soluta vero vel quas sequi nobis cumque assumenda sunt quaerat quis officia veniam ipsam repellendus possimus? Modi, ipsa.Voluptas asperiores unde iusto illum quidem neque corporis aspernatur, sint veritatis nam aliquid dignissimos repellat non quibusdam nisi nihil pariatur, ullam, officia autem at. Veniam culpa quia asperiores porro? Velit.Eveniet, amet. Mollitia labore, modi ratione deleniti molestiae perspiciatis tempora blanditiis. Eaque eum, repellendus quae dolor quia dolore distinctio asperiores, fuga voluptas odio, autem dicta! In soluta nostrum vel exercitationem?Deserunt dolores perferendis recusandae nobis voluptatum dignissimos mollitia, minus harum eos quibusdam natus numquam aperiam debitis temporibus totam error et? Quis facere laborum libero ipsum officia eligendi eum dolore autem!Culpa adipisci suscipit excepturi asperiores fugiat saepe at, maxime cumque recusandae sit, labore quas, eveniet sed. Rerum consequuntur iusto, sapiente est id veniam doloribus aliquam ex provident harum, vitae minima?Illum temporibus sit qui. Dolores consequatur ab doloremque vero, nostrum, facilis similique repellat corrupti veniam earum laborum qui totam, tempore ut eaque. Eaque dolores ducimus perferendis alias aspernatur architecto? Dolore.",
              "price": 68900,
              "category_id": 1
            },
            {
              "name": "Joyor Y5S",
              "slug": "joyor-y5s",
              "imageUrl": "/uploads/products/Joyor-Y5S.png",
              "images": ["/uploads/products/Joyor-Y5S.png", "/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Begode-Tesla-T3.png"],
              "discount": null,
              "inStock": true,
              "isNew": true,
              "description": "Электросамокат с амортизацией и мощным двигателем для повседневной езды. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni recusandae corrupti repudiandae totam necessitatibus quis id modi, dolorum pariatur dignissimos hic inventore doloribus? Quas perspiciatis ea aspernatur fugiat alias.Non sapiente molestias libero maiores eligendi hic qui nobis aut et. Doloremque, consequatur! Enim consequatur accusantium qui ipsam numquam, similique laboriosam cupiditate dicta quidem eaque, nesciunt quo aspernatur tenetur assumenda.Accusantium cum dolore facere. Tempora cum eaque illo. Culpa cupiditate, ut doloremque reiciendis sit velit maxime consequuntur placeat praesentium deserunt vel, quibusdam soluta itaque quia! Natus doloremque qui fugit placeat.Nihil ipsa aut earum facilis voluptate? Enim, nisi nostrum provident autem ex eius optio nam? Dolorum nemo ex velit. Laboriosam quaerat illum non praesentium nisi repellat eveniet facere molestias optio.Tempore quam error hic eius recusandae fugiat sapiente cupiditate laboriosam earum repellat, soluta vero vel quas sequi nobis cumque assumenda sunt quaerat quis officia veniam ipsam repellendus possimus? Modi, ipsa.Voluptas asperiores unde iusto illum quidem neque corporis aspernatur, sint veritatis nam aliquid dignissimos repellat non quibusdam nisi nihil pariatur, ullam, officia autem at. Veniam culpa quia asperiores porro? Velit.Eveniet, amet. Mollitia labore, modi ratione deleniti molestiae perspiciatis tempora blanditiis. Eaque eum, repellendus quae dolor quia dolore distinctio asperiores, fuga voluptas odio, autem dicta! In soluta nostrum vel exercitationem?Deserunt dolores perferendis recusandae nobis voluptatum dignissimos mollitia, minus harum eos quibusdam natus numquam aperiam debitis temporibus totam error et? Quis facere laborum libero ipsum officia eligendi eum dolore autem!Culpa adipisci suscipit excepturi asperiores fugiat saepe at, maxime cumque recusandae sit, labore quas, eveniet sed. Rerum consequuntur iusto, sapiente est id veniam doloribus aliquam ex provident harum, vitae minima?Illum temporibus sit qui. Dolores consequatur ab doloremque vero, nostrum, facilis similique repellat corrupti veniam earum laborum qui totam, tempore ut eaque. Eaque dolores ducimus perferendis alias aspernatur architecto? Dolore.",
              "price": 61900,
              "category_id": 1
            },
            {
              "name": "Fiido D4S Электровелосипед",
              "slug": "fiido-d4s-elektrovelosiped",
              "imageUrl": "/uploads/products/Fiido-D4S.png",
              "images": ["/uploads/products/Fiido-D4S.png", "/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Begode-Tesla-T3.png"],
              "discount": 8,
              "inStock": true,
              "isNew": false,
              "description": "Складной и лёгкий электровелосипед для города и путешествий. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni recusandae corrupti repudiandae totam necessitatibus quis id modi, dolorum pariatur dignissimos hic inventore doloribus? Quas perspiciatis ea aspernatur fugiat alias.Non sapiente molestias libero maiores eligendi hic qui nobis aut et. Doloremque, consequatur! Enim consequatur accusantium qui ipsam numquam, similique laboriosam cupiditate dicta quidem eaque, nesciunt quo aspernatur tenetur assumenda.Accusantium cum dolore facere. Tempora cum eaque illo. Culpa cupiditate, ut doloremque reiciendis sit velit maxime consequuntur placeat praesentium deserunt vel, quibusdam soluta itaque quia! Natus doloremque qui fugit placeat.Nihil ipsa aut earum facilis voluptate? Enim, nisi nostrum provident autem ex eius optio nam? Dolorum nemo ex velit. Laboriosam quaerat illum non praesentium nisi repellat eveniet facere molestias optio.Tempore quam error hic eius recusandae fugiat sapiente cupiditate laboriosam earum repellat, soluta vero vel quas sequi nobis cumque assumenda sunt quaerat quis officia veniam ipsam repellendus possimus? Modi, ipsa.Voluptas asperiores unde iusto illum quidem neque corporis aspernatur, sint veritatis nam aliquid dignissimos repellat non quibusdam nisi nihil pariatur, ullam, officia autem at. Veniam culpa quia asperiores porro? Velit.Eveniet, amet. Mollitia labore, modi ratione deleniti molestiae perspiciatis tempora blanditiis. Eaque eum, repellendus quae dolor quia dolore distinctio asperiores, fuga voluptas odio, autem dicta! In soluta nostrum vel exercitationem?Deserunt dolores perferendis recusandae nobis voluptatum dignissimos mollitia, minus harum eos quibusdam natus numquam aperiam debitis temporibus totam error et? Quis facere laborum libero ipsum officia eligendi eum dolore autem!Culpa adipisci suscipit excepturi asperiores fugiat saepe at, maxime cumque recusandae sit, labore quas, eveniet sed. Rerum consequuntur iusto, sapiente est id veniam doloribus aliquam ex provident harum, vitae minima?Illum temporibus sit qui. Dolores consequatur ab doloremque vero, nostrum, facilis similique repellat corrupti veniam earum laborum qui totam, tempore ut eaque. Eaque dolores ducimus perferendis alias aspernatur architecto? Dolore.",
              "price": 55500,
              "category_id": 2
            },
            {
              "name": "Shulz E-Go",
              "slug": "shulz-e-go",
              "imageUrl": "/uploads/products/Shulz-E-Go.png",
              "images": ["/uploads/products/Shulz-E-Go.png", "/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Begode-Tesla-T3.png"],
              "discount": null,
              "inStock": false,
              "isNew": false,
              "description": "Современный электровелосипед с интегрированным аккумулятором и планетарной втулкой. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni recusandae corrupti repudiandae totam necessitatibus quis id modi, dolorum pariatur dignissimos hic inventore doloribus? Quas perspiciatis ea aspernatur fugiat alias.Non sapiente molestias libero maiores eligendi hic qui nobis aut et. Doloremque, consequatur! Enim consequatur accusantium qui ipsam numquam, similique laboriosam cupiditate dicta quidem eaque, nesciunt quo aspernatur tenetur assumenda.Accusantium cum dolore facere. Tempora cum eaque illo. Culpa cupiditate, ut doloremque reiciendis sit velit maxime consequuntur placeat praesentium deserunt vel, quibusdam soluta itaque quia! Natus doloremque qui fugit placeat.Nihil ipsa aut earum facilis voluptate? Enim, nisi nostrum provident autem ex eius optio nam? Dolorum nemo ex velit. Laboriosam quaerat illum non praesentium nisi repellat eveniet facere molestias optio.Tempore quam error hic eius recusandae fugiat sapiente cupiditate laboriosam earum repellat, soluta vero vel quas sequi nobis cumque assumenda sunt quaerat quis officia veniam ipsam repellendus possimus? Modi, ipsa.Voluptas asperiores unde iusto illum quidem neque corporis aspernatur, sint veritatis nam aliquid dignissimos repellat non quibusdam nisi nihil pariatur, ullam, officia autem at. Veniam culpa quia asperiores porro? Velit.Eveniet, amet. Mollitia labore, modi ratione deleniti molestiae perspiciatis tempora blanditiis. Eaque eum, repellendus quae dolor quia dolore distinctio asperiores, fuga voluptas odio, autem dicta! In soluta nostrum vel exercitationem?Deserunt dolores perferendis recusandae nobis voluptatum dignissimos mollitia, minus harum eos quibusdam natus numquam aperiam debitis temporibus totam error et? Quis facere laborum libero ipsum officia eligendi eum dolore autem!Culpa adipisci suscipit excepturi asperiores fugiat saepe at, maxime cumque recusandae sit, labore quas, eveniet sed. Rerum consequuntur iusto, sapiente est id veniam doloribus aliquam ex provident harum, vitae minima?Illum temporibus sit qui. Dolores consequatur ab doloremque vero, nostrum, facilis similique repellat corrupti veniam earum laborum qui totam, tempore ut eaque. Eaque dolores ducimus perferendis alias aspernatur architecto? Dolore.",
              "price": 78900,
              "category_id": 2
            },
            {
              "name": "Smart Balance Wheel 6.5",
              "slug": "smart-balance-wheel-6-5",
              "imageUrl": "/uploads/products/Smart-Balance-Wheel.png",
              "images": ["/uploads/products/Smart-Balance-Wheel.png", "/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Begode-Tesla-T3.png"],
              "discount": 18,
              "inStock": true,
              "isNew": false,
              "description": "Классический гироскутер с авто балансом и отличной устойчивостью. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni recusandae corrupti repudiandae totam necessitatibus quis id modi, dolorum pariatur dignissimos hic inventore doloribus? Quas perspiciatis ea aspernatur fugiat alias.Non sapiente molestias libero maiores eligendi hic qui nobis aut et. Doloremque, consequatur! Enim consequatur accusantium qui ipsam numquam, similique laboriosam cupiditate dicta quidem eaque, nesciunt quo aspernatur tenetur assumenda.Accusantium cum dolore facere. Tempora cum eaque illo. Culpa cupiditate, ut doloremque reiciendis sit velit maxime consequuntur placeat praesentium deserunt vel, quibusdam soluta itaque quia! Natus doloremque qui fugit placeat.Nihil ipsa aut earum facilis voluptate? Enim, nisi nostrum provident autem ex eius optio nam? Dolorum nemo ex velit. Laboriosam quaerat illum non praesentium nisi repellat eveniet facere molestias optio.Tempore quam error hic eius recusandae fugiat sapiente cupiditate laboriosam earum repellat, soluta vero vel quas sequi nobis cumque assumenda sunt quaerat quis officia veniam ipsam repellendus possimus? Modi, ipsa.Voluptas asperiores unde iusto illum quidem neque corporis aspernatur, sint veritatis nam aliquid dignissimos repellat non quibusdam nisi nihil pariatur, ullam, officia autem at. Veniam culpa quia asperiores porro? Velit.Eveniet, amet. Mollitia labore, modi ratione deleniti molestiae perspiciatis tempora blanditiis. Eaque eum, repellendus quae dolor quia dolore distinctio asperiores, fuga voluptas odio, autem dicta! In soluta nostrum vel exercitationem?Deserunt dolores perferendis recusandae nobis voluptatum dignissimos mollitia, minus harum eos quibusdam natus numquam aperiam debitis temporibus totam error et? Quis facere laborum libero ipsum officia eligendi eum dolore autem!Culpa adipisci suscipit excepturi asperiores fugiat saepe at, maxime cumque recusandae sit, labore quas, eveniet sed. Rerum consequuntur iusto, sapiente est id veniam doloribus aliquam ex provident harum, vitae minima?Illum temporibus sit qui. Dolores consequatur ab doloremque vero, nostrum, facilis similique repellat corrupti veniam earum laborum qui totam, tempore ut eaque. Eaque dolores ducimus perferendis alias aspernatur architecto? Dolore.",
              "price": 17500,
              "category_id": 3
            },
            {
              "name": "Hoverzon XLS",
              "slug": "hoverzon-xls",
              "imageUrl": "/uploads/products/Hoverzon-XLS.png",
              "images": ["/uploads/products/Hoverzon-XLS.png", "/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Begode-Tesla-T3.png"],
              "discount": null,
              "inStock": true,
              "isNew": true,
              "description": "Модель для детей и подростков с улучшенной защитой от перегрева. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni recusandae corrupti repudiandae totam necessitatibus quis id modi, dolorum pariatur dignissimos hic inventore doloribus? Quas perspiciatis ea aspernatur fugiat alias.Non sapiente molestias libero maiores eligendi hic qui nobis aut et. Doloremque, consequatur! Enim consequatur accusantium qui ipsam numquam, similique laboriosam cupiditate dicta quidem eaque, nesciunt quo aspernatur tenetur assumenda.Accusantium cum dolore facere. Tempora cum eaque illo. Culpa cupiditate, ut doloremque reiciendis sit velit maxime consequuntur placeat praesentium deserunt vel, quibusdam soluta itaque quia! Natus doloremque qui fugit placeat.Nihil ipsa aut earum facilis voluptate? Enim, nisi nostrum provident autem ex eius optio nam? Dolorum nemo ex velit. Laboriosam quaerat illum non praesentium nisi repellat eveniet facere molestias optio.Tempore quam error hic eius recusandae fugiat sapiente cupiditate laboriosam earum repellat, soluta vero vel quas sequi nobis cumque assumenda sunt quaerat quis officia veniam ipsam repellendus possimus? Modi, ipsa.Voluptas asperiores unde iusto illum quidem neque corporis aspernatur, sint veritatis nam aliquid dignissimos repellat non quibusdam nisi nihil pariatur, ullam, officia autem at. Veniam culpa quia asperiores porro? Velit.Eveniet, amet. Mollitia labore, modi ratione deleniti molestiae perspiciatis tempora blanditiis. Eaque eum, repellendus quae dolor quia dolore distinctio asperiores, fuga voluptas odio, autem dicta! In soluta nostrum vel exercitationem?Deserunt dolores perferendis recusandae nobis voluptatum dignissimos mollitia, minus harum eos quibusdam natus numquam aperiam debitis temporibus totam error et? Quis facere laborum libero ipsum officia eligendi eum dolore autem!Culpa adipisci suscipit excepturi asperiores fugiat saepe at, maxime cumque recusandae sit, labore quas, eveniet sed. Rerum consequuntur iusto, sapiente est id veniam doloribus aliquam ex provident harum, vitae minima?Illum temporibus sit qui. Dolores consequatur ab doloremque vero, nostrum, facilis similique repellat corrupti veniam earum laborum qui totam, tempore ut eaque. Eaque dolores ducimus perferendis alias aspernatur architecto? Dolore.",
              "price": 18900,
              "category_id": 3
            },
            {
              "name": "Exway Flex Riot",
              "slug": "exway-flex-riot",
              "imageUrl": "/uploads/products/Exway-Flex-Riot.png",
              "images": ["/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Begode-Tesla-T3.png"],
              "discount": 7,
              "inStock": true,
              "isNew": true,
              "description": "Лёгкий и манёвренный электроскейт для комфортной городской езды. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni recusandae corrupti repudiandae totam necessitatibus quis id modi, dolorum pariatur dignissimos hic inventore doloribus? Quas perspiciatis ea aspernatur fugiat alias.Non sapiente molestias libero maiores eligendi hic qui nobis aut et. Doloremque, consequatur! Enim consequatur accusantium qui ipsam numquam, similique laboriosam cupiditate dicta quidem eaque, nesciunt quo aspernatur tenetur assumenda.Accusantium cum dolore facere. Tempora cum eaque illo. Culpa cupiditate, ut doloremque reiciendis sit velit maxime consequuntur placeat praesentium deserunt vel, quibusdam soluta itaque quia! Natus doloremque qui fugit placeat.Nihil ipsa aut earum facilis voluptate? Enim, nisi nostrum provident autem ex eius optio nam? Dolorum nemo ex velit. Laboriosam quaerat illum non praesentium nisi repellat eveniet facere molestias optio.Tempore quam error hic eius recusandae fugiat sapiente cupiditate laboriosam earum repellat, soluta vero vel quas sequi nobis cumque assumenda sunt quaerat quis officia veniam ipsam repellendus possimus? Modi, ipsa.Voluptas asperiores unde iusto illum quidem neque corporis aspernatur, sint veritatis nam aliquid dignissimos repellat non quibusdam nisi nihil pariatur, ullam, officia autem at. Veniam culpa quia asperiores porro? Velit.Eveniet, amet. Mollitia labore, modi ratione deleniti molestiae perspiciatis tempora blanditiis. Eaque eum, repellendus quae dolor quia dolore distinctio asperiores, fuga voluptas odio, autem dicta! In soluta nostrum vel exercitationem?Deserunt dolores perferendis recusandae nobis voluptatum dignissimos mollitia, minus harum eos quibusdam natus numquam aperiam debitis temporibus totam error et? Quis facere laborum libero ipsum officia eligendi eum dolore autem!Culpa adipisci suscipit excepturi asperiores fugiat saepe at, maxime cumque recusandae sit, labore quas, eveniet sed. Rerum consequuntur iusto, sapiente est id veniam doloribus aliquam ex provident harum, vitae minima?Illum temporibus sit qui. Dolores consequatur ab doloremque vero, nostrum, facilis similique repellat corrupti veniam earum laborum qui totam, tempore ut eaque. Eaque dolores ducimus perferendis alias aspernatur architecto? Dolore.",
              "price": 67000,
              "category_id": 4
            },
            {
              "name": "Meepo V4 Shuffle",
              "slug": "meepo-v4-shuffle",
              "imageUrl": "/uploads/products/Meepo-V4-Shuffle.png",
              "images": ["/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Begode-Tesla-T3.png"],
              "discount": null,
              "inStock": true,
              "isNew": false,
              "description": "Скейт с резким разгоном и высокой управляемостью, идеален для фана. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni recusandae corrupti repudiandae totam necessitatibus quis id modi, dolorum pariatur dignissimos hic inventore doloribus? Quas perspiciatis ea aspernatur fugiat alias.Non sapiente molestias libero maiores eligendi hic qui nobis aut et. Doloremque, consequatur! Enim consequatur accusantium qui ipsam numquam, similique laboriosam cupiditate dicta quidem eaque, nesciunt quo aspernatur tenetur assumenda.Accusantium cum dolore facere. Tempora cum eaque illo. Culpa cupiditate, ut doloremque reiciendis sit velit maxime consequuntur placeat praesentium deserunt vel, quibusdam soluta itaque quia! Natus doloremque qui fugit placeat.Nihil ipsa aut earum facilis voluptate? Enim, nisi nostrum provident autem ex eius optio nam? Dolorum nemo ex velit. Laboriosam quaerat illum non praesentium nisi repellat eveniet facere molestias optio.Tempore quam error hic eius recusandae fugiat sapiente cupiditate laboriosam earum repellat, soluta vero vel quas sequi nobis cumque assumenda sunt quaerat quis officia veniam ipsam repellendus possimus? Modi, ipsa.Voluptas asperiores unde iusto illum quidem neque corporis aspernatur, sint veritatis nam aliquid dignissimos repellat non quibusdam nisi nihil pariatur, ullam, officia autem at. Veniam culpa quia asperiores porro? Velit.Eveniet, amet. Mollitia labore, modi ratione deleniti molestiae perspiciatis tempora blanditiis. Eaque eum, repellendus quae dolor quia dolore distinctio asperiores, fuga voluptas odio, autem dicta! In soluta nostrum vel exercitationem?Deserunt dolores perferendis recusandae nobis voluptatum dignissimos mollitia, minus harum eos quibusdam natus numquam aperiam debitis temporibus totam error et? Quis facere laborum libero ipsum officia eligendi eum dolore autem!Culpa adipisci suscipit excepturi asperiores fugiat saepe at, maxime cumque recusandae sit, labore quas, eveniet sed. Rerum consequuntur iusto, sapiente est id veniam doloribus aliquam ex provident harum, vitae minima?Illum temporibus sit qui. Dolores consequatur ab doloremque vero, nostrum, facilis similique repellat corrupti veniam earum laborum qui totam, tempore ut eaque. Eaque dolores ducimus perferendis alias aspernatur architecto? Dolore.",
              "price": 52000,
              "category_id": 4
            },
            {
              "name": "Begode Tesla T3",
              "slug": "begode-tesla-t3",
              "imageUrl": "/uploads/products/Begode-Tesla-T3.png",
              "images": ["/uploads/products/Begode-Tesla-T3.png", "/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Begode-Tesla-T3.png"],
              "discount": 5,
              "inStock": true,
              "isNew": true,
              "description": "Компактное моноколесо с хорошей динамикой и влагозащитой. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni recusandae corrupti repudiandae totam necessitatibus quis id modi, dolorum pariatur dignissimos hic inventore doloribus? Quas perspiciatis ea aspernatur fugiat alias.Non sapiente molestias libero maiores eligendi hic qui nobis aut et. Doloremque, consequatur! Enim consequatur accusantium qui ipsam numquam, similique laboriosam cupiditate dicta quidem eaque, nesciunt quo aspernatur tenetur assumenda.Accusantium cum dolore facere. Tempora cum eaque illo. Culpa cupiditate, ut doloremque reiciendis sit velit maxime consequuntur placeat praesentium deserunt vel, quibusdam soluta itaque quia! Natus doloremque qui fugit placeat.Nihil ipsa aut earum facilis voluptate? Enim, nisi nostrum provident autem ex eius optio nam? Dolorum nemo ex velit. Laboriosam quaerat illum non praesentium nisi repellat eveniet facere molestias optio.Tempore quam error hic eius recusandae fugiat sapiente cupiditate laboriosam earum repellat, soluta vero vel quas sequi nobis cumque assumenda sunt quaerat quis officia veniam ipsam repellendus possimus? Modi, ipsa.Voluptas asperiores unde iusto illum quidem neque corporis aspernatur, sint veritatis nam aliquid dignissimos repellat non quibusdam nisi nihil pariatur, ullam, officia autem at. Veniam culpa quia asperiores porro? Velit.Eveniet, amet. Mollitia labore, modi ratione deleniti molestiae perspiciatis tempora blanditiis. Eaque eum, repellendus quae dolor quia dolore distinctio asperiores, fuga voluptas odio, autem dicta! In soluta nostrum vel exercitationem?Deserunt dolores perferendis recusandae nobis voluptatum dignissimos mollitia, minus harum eos quibusdam natus numquam aperiam debitis temporibus totam error et? Quis facere laborum libero ipsum officia eligendi eum dolore autem!Culpa adipisci suscipit excepturi asperiores fugiat saepe at, maxime cumque recusandae sit, labore quas, eveniet sed. Rerum consequuntur iusto, sapiente est id veniam doloribus aliquam ex provident harum, vitae minima?Illum temporibus sit qui. Dolores consequatur ab doloremque vero, nostrum, facilis similique repellat corrupti veniam earum laborum qui totam, tempore ut eaque. Eaque dolores ducimus perferendis alias aspernatur architecto? Dolore.",
              "price": 95000,
              "category_id": 5
            },
            {
              "name": "Gotway Nikola AR+",
              "slug": "gotway-nikola-ar-plus",
              "imageUrl": "/uploads/products/Gotway-Nikola-AR.png",
              "images": ["/uploads/products/Gotway-Nikola-AR.png", "/uploads/products/Exway-Flex-Riot.png", "/uploads/products/Meepo-V4-Shuffle.png", "/uploads/products/Begode-Tesla-T3.png"],
              "discount": 10,
              "inStock": false,
              "isNew": false,
              "description": "Моноколесо премиум-класса с RGB-подсветкой и огромным запасом хода. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni recusandae corrupti repudiandae totam necessitatibus quis id modi, dolorum pariatur dignissimos hic inventore doloribus? Quas perspiciatis ea aspernatur fugiat alias.Non sapiente molestias libero maiores eligendi hic qui nobis aut et. Doloremque, consequatur! Enim consequatur accusantium qui ipsam numquam, similique laboriosam cupiditate dicta quidem eaque, nesciunt quo aspernatur tenetur assumenda.Accusantium cum dolore facere. Tempora cum eaque illo. Culpa cupiditate, ut doloremque reiciendis sit velit maxime consequuntur placeat praesentium deserunt vel, quibusdam soluta itaque quia! Natus doloremque qui fugit placeat.Nihil ipsa aut earum facilis voluptate? Enim, nisi nostrum provident autem ex eius optio nam? Dolorum nemo ex velit. Laboriosam quaerat illum non praesentium nisi repellat eveniet facere molestias optio.Tempore quam error hic eius recusandae fugiat sapiente cupiditate laboriosam earum repellat, soluta vero vel quas sequi nobis cumque assumenda sunt quaerat quis officia veniam ipsam repellendus possimus? Modi, ipsa.Voluptas asperiores unde iusto illum quidem neque corporis aspernatur, sint veritatis nam aliquid dignissimos repellat non quibusdam nisi nihil pariatur, ullam, officia autem at. Veniam culpa quia asperiores porro? Velit.Eveniet, amet. Mollitia labore, modi ratione deleniti molestiae perspiciatis tempora blanditiis. Eaque eum, repellendus quae dolor quia dolore distinctio asperiores, fuga voluptas odio, autem dicta! In soluta nostrum vel exercitationem?Deserunt dolores perferendis recusandae nobis voluptatum dignissimos mollitia, minus harum eos quibusdam natus numquam aperiam debitis temporibus totam error et? Quis facere laborum libero ipsum officia eligendi eum dolore autem!Culpa adipisci suscipit excepturi asperiores fugiat saepe at, maxime cumque recusandae sit, labore quas, eveniet sed. Rerum consequuntur iusto, sapiente est id veniam doloribus aliquam ex provident harum, vitae minima?Illum temporibus sit qui. Dolores consequatur ab doloremque vero, nostrum, facilis similique repellat corrupti veniam earum laborum qui totam, tempore ut eaque. Eaque dolores ducimus perferendis alias aspernatur architecto? Dolore.",
              "price": 129000,
              "category_id": 5
            }
        ]
    });
    await prisma.cartItem.createMany({
        data: [
            {
                cartId: 1,
                productId: 1,
                quantity: 1
            },
            {
                cartId: 2,
                productId: 2,
                quantity: 2
            }
        ]
    });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "News" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
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

