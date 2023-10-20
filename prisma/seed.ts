import { prismaClient } from '../src/lib/prisma';


async function main() {
  try {
    const tenant = await prismaClient.tenant.create({
      data: {
        name: 'Fsw Store',
        slug: 'fsw-store',
        logoUrl:
          'https://res.cloudinary.com/deliverits/image/upload/f_auto,c_limit,w_256,q_auto/v1697771058/loja/fsw_eyvwoq.png',
        colorPrimary: '#000',
      },
    });

    const mousesCategory = await prismaClient.category.create({
      data: {
        tenantId: tenant.id,
        name: 'Mouses',
        slug: 'mouses',
        imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/mouses.png',
      },
    });

    const mouses = [
      {
        tenantId: tenant.id,
        name: 'Logitech MX Master 3s',
        slug: 'logitech-mx-master-3s',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_mx-master-3s.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_mx-master-3s.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_mx-master-3s.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_mx-master-3s.png',
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Logitech Pro X Superlight',
        slug: 'logitech-pro-x-superlight',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-superlight.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-superlight.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-superlight.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-superlight.png',
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        tenantId: tenant.id,
        name: 'Logitech G305 Lightspeed',
        slug: 'logitech-g305-lightspeed',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-lightspeed.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-lightspeed.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-lightspeed.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-lightspeed.png',
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        tenantId: tenant.id,
        name: 'Hyperx Pulsefire Dart',
        slug: 'hyperx-pulsefire-dart',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_hyperx-dart.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_hyperx-dart.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_hyperx-dart.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_hyperx-dart.png',
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Razer Deathadder V2 Pro',
        slug: 'razer-deathadder-v2-pro',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_razer-deathadder.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_razer-deathadder.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_razer-deathadder.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_razer-deathadder.png',
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercentage: 0,
      },
    ];

    await prismaClient.product.createMany({
      data: mouses,
    });

    const keyboardsCategory = await prismaClient.category.create({
      data: {
        tenantId: tenant.id,
        name: 'Teclados',
        slug: 'keyboards',
        imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/keyboards.png',
      },
    });

    const keyboards = [
      {
        tenantId: tenant.id,
        name: 'Logitech MX Keys Mini',
        slug: 'logitech-mx-keys-mini',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-mx-keys-mini.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-mx-keys-mini.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-mx-keys-mini.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-mx-keys-mini.png',
        ],
        basePrice: 650,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Logitech MX Keys S',
        slug: 'logitech-mx-keys-s',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-mx-keys-s.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-mx-keys-s.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-mx-keys-s.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-mx-keys-s.png',
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Logitech Pop Keys',
        slug: 'logitech-pop-keys',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-pop-keys.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-pop-keys.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-pop-keys.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-pop-keys.png',
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Logitech MX Mechanical',
        slug: 'logitech-mx-mechanical',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-mx-mechanical.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-mx-mechanical.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-mx-mechanical.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-mx-mechanical.png',
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Epomaker TH80',
        slug: 'epomaker-th80',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_epomaker-th80.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_epomaker-th80.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_epomaker-th80.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_epomaker-th80.png',
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Redragon Gamer Ashe',
        slug: 'redragon-gamer-ashe',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_redragon-gamer-ashe.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_redragon-gamer-ashe.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_redragon-gamer-ashe.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_redragon-gamer-ashe.png',
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25, // 10% discount
      },
    ];

    await prismaClient.product.createMany({
      data: keyboards,
    });

    const headphonesCategory = await prismaClient.category.create({
      data: {
        tenantId: tenant.id,
        name: 'Fones',
        slug: 'headphones',
        imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/headphones.png',
      },
    });

    const headphones = [
      {
        tenantId: tenant.id,
        name: 'Logitech Zone Vibe 100',
        slug: 'logitech-zone-vibe-100',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-vibe.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-vibe.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-vibe.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-vibe.png',
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Logitech Pro X 2 Lightspeed',
        slug: 'logitech-pro-x-2-lightspeed',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-lightspeed-phone.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-lightspeed-phone.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-lightspeed-phone.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-lightspeed-phone.png',
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Logitech Astro A30',
        slug: 'logitech-astro-a30',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-astro-a30.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-astro-a30.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-astro-a30.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-astro-a30.png',
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Logitech Zone Wired Earbuds',
        slug: 'logitech-zone-wired-earbuds',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-earbuds.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-earbuds.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-earbuds.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-earbuds.png',
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Hyperx Cloud Stinger 2',
        slug: 'hyperx-cloud-stinger-2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_hyperx-stinger.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_hyperx-stinger.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_hyperx-stinger.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_hyperx-stinger.png',
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Razer Kraken X',
        slug: 'razer-kraken-x',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_razer-kraken.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_razer-kraken.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_razer-kraken.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_razer-kraken.png',
        ],
        basePrice: 200,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prismaClient.product.createMany({
      data: headphones,
    });

    const mousepadsCategory = await prismaClient.category.create({
      data: {
        tenantId: tenant.id,
        name: 'Mousepads',
        slug: 'mousepads',
        imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/mousepads.png',
      },
    });

    const mousepads = [
      {
        tenantId: tenant.id,
        name: 'Logitech Powerplay',
        slug: 'logitech-powerplay',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-powerplay.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-powerplay.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-powerplay.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-powerplay.png',
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Logitech Desk Mat',
        slug: 'logitech-desk-mat',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-desk-mat.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-desk-mat.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-desk-mat.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-desk-mat.png',
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Logitech G740',
        slug: 'logitech-g740',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-g740.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-g740.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-g740.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-g740.png',
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Logitech Mousepad Studio Series',
        slug: 'logitech-mousepad-studio-series',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-studio-series.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-studio-series.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-studio-series.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-studio-series.png',
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Force One Skyhawk Dark',
        slug: 'force-one-skyhawk-dark',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_force-dark.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_force-dark.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_force-dark.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_force-dark.png',
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Force One Skyhawk Snow',
        slug: 'force-one-skyhawk-snow',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_force-snow.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_force-snow.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_force-snow.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_force-snow.png',
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
    ];

    await prismaClient.product.createMany({
      data: mousepads,
    });

    const monitorsCategory = await prismaClient.category.create({
      data: {
        tenantId: tenant.id,
        name: 'Monitores',
        slug: 'monitors',
        imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/monitors.png',
      },
    });

    const monitors = [
      {
        tenantId: tenant.id,
        name: 'Dell S2421HN',
        slug: 'dell-s2421hn',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S2421HN.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S2421HN.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S2421HN.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S2421HN.png',
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Dell P2422H',
        slug: 'dell-p2422h',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-P2422H.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-P2422H.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-P2422H.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-P2422H.png',
        ],
        basePrice: 2000,
        categoryId: monitorsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Dell P2723QE',
        slug: 'dell-p2723qe',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-P2723QE.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-P2723QE.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-P2723QE.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-P2723QE.png',
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Dell S3422DWG',
        slug: 'dell-s3422dwg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S3422DWG.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S3422DWG.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S3422DWG.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S3422DWG.png',
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Dell S3222DGM',
        slug: 'dell-s3222dgm',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-S3222DGM.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-S3222DGM.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-S3222DGM.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-S3222DGM.png',
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Dell AW2524HF',
        slug: 'dell-aw2524hf',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_dell-AW2524HF.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_dell-AW2524HF.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_dell-AW2524HF.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_dell-AW2524HF.png',
        ],
        basePrice: 4200,
        categoryId: monitorsCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prismaClient.product.createMany({
      data: monitors,
    });

    const speakersCategory = await prismaClient.category.create({
      data: {
        tenantId: tenant.id,
        name: 'Speakers',
        slug: 'speakers',
        imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/speakers.png',
      },
    });

    const speakers = [
      {
        tenantId: tenant.id,
        name: 'Logitech Surround Sound Z607',
        slug: 'logitech-surround-sound-z607',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-surround-z607.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-surround-z607.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-surround-z607.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-surround-z607.png',
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Logitech Dock',
        slug: 'logitech-dock',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-dock.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-dock.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-dock.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-dock.png',
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Sony SA-Z9R Speakers',
        slug: 'sony-sa-z9r-speakers',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-SA-Z9R.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-SA-Z9R.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-SA-Z9R.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-SA-Z9R.png',
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Sony XB43 Extra Bass',
        slug: 'sony-xb43-extra-bass',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-extra-bass.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-extra-bass.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-extra-bass.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-extra-bass.png',
        ],
        basePrice: 3200,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Sony XB23 Extra Bass',
        slug: 'sony-xb23-extra-bass',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-XB23.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-XB23.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-XB23.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-XB23.png',
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        tenantId: tenant.id,
        name: 'Sony HT-S200F Soundbar',
        slug: 'sony-ht-s200f-soundbar',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-S200F.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-S200F.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-S200F.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-S200F.png',
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prismaClient.product.createMany({
      data: speakers,
    });

    console.log('Seed completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prismaClient.$disconnect();
  }
}

main()
  .then(async () => {
    await prismaClient.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
