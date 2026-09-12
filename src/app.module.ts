import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './modules/users/users.module.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { RolesModule } from './modules/roles/roles.module.js';
import { PermissionsModule } from './modules/permissions/permissions.module.js';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from './config/jwt.config.js';
import databaseConfig from './config/database.config.js';
import { DatabaseModule } from './database/database.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, jwtConfig],
    }),
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'nest-basic',
    }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    RolesModule,
    PermissionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
