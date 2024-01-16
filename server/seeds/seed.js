// seeds.js

const { PrismaClient } = require('../node_modules/.prisma/client');

const prisma = new PrismaClient();

async function seed() {
  try {
    // Seed User Table
    const user1 = await prisma.user.create({
      data: {
        username: 'adarsh',
        email: 'adarsh@gmail.com',
        password_hash: 'adarsh',
      },
    });

    const user2 = await prisma.user.create({
      data: {
        username: 'sahu',
        email: 'sahu@gmail.com',
        password_hash: 'sahu',
      },
    });

    // Seed Category Table
    const category1 = await prisma.category.create({
      data: {
        category_name: 'Comedy',
      },
    });

    const category2 = await prisma.category.create({
      data: {
        category_name: 'Sports',
      },
    });

    // Seed Media Table
    const media1 = await prisma.media.create({
      data: {
        title: 'Funny Moments From Season 6 | Friends',
        description: 'You are the guy who gets divorced.',
        file_url: 'https://youtu.be/uqsvyj6lnnE?si=1kzCaZUP6CVXb3Aj',
        thumbnail_url: 'https://s3.youthkiawaaz.com/wp-content/uploads/2011/11/07001341/FRIENDS.jpg',
        upload_date: new Date(),
        category_id: category1.category_id,
        user_id: user1.user_id,
        is_favorite: false,
      },
    });

    const media2 = await prisma.media.create({
      data: {
        title: 'THUNDER at LAKERS | FULL GAME HIGHLIGHTS',
        description: 'The Los Angles Lakers defeated the Oklahoma City Thunder, 112-105.',
        file_url: 'https://youtu.be/XjYR1MvjHaY?si=wrYgkGUswO8c4kbd',
        thumbnail_url: 'https://i.ytimg.com/vi/XjYR1MvjHaY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdDYDeqRpMNfe2xag0Kmm_GiiDxA',
        upload_date: new Date(),
        category_id: category2.category_id,
        user_id: user2.user_id,
        is_favorite: true,
      },
    });

    // Seed Favorites Table
    await prisma.favorites.create({
      data: {
        user_id: user1.user_id,
        media_id: media2.media_id,
        added_at: new Date(),
      },
    });

    // Seed Theme Preference Table
    await prisma.themePreference.create({
      data: {
        user_id: user2.user_id,
        theme_preference: 'dark',
        updated_at: new Date(),
      },
    });

    console.log('Database seeding completed.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the Prisma Client connection
    await prisma.$disconnect();
  }
}

// Call the seed function to populate the database
seed();