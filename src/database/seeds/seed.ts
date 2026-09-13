import 'dotenv/config';

import { DataSource } from 'typeorm';
import { seedUsers } from './user.seed.js';

const dataSource = new DataSource({
  type: 'mysql',

  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT ?? 3306),

  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,

  database: process.env.DB_DATABASE,

  entities: [
    'src/modules/**/entities/*.entity.ts',
  ],
});

async function runSeeds() {
  await dataSource.initialize();

  try {
    await seedUsers(dataSource);

    console.log('Database seeding completed.');
  } catch (error) {
    console.error('Database seeding failed:', error);
    process.exitCode = 1;
  } finally {
    await dataSource.destroy();
  }
}

runSeeds();