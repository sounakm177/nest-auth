import * as bcrypt from 'bcrypt';
import { DataSource } from 'typeorm';
import { User } from '../../modules/users/entities/user.entity.js';

export async function seedUsers(dataSource: DataSource) {
  const userRepository = dataSource.getRepository(User);

  const existingCount = await userRepository.count();
  if (existingCount > 0) {
    console.log('Users already seeded, skipping.');
    return;
  }

  const password = await bcrypt.hash('password123', 10);

  const users = userRepository.create([
    { name: 'Admin User', email: 'admin@example.com', password, isActive: true },
  ]);

  await userRepository.save(users);

  console.log(`Seeded ${users.length} users.`);
}