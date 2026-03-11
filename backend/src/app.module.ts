import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisConfig } from './infrastructure/redis/redis.config';
import { RegistrationModule } from './modules/registration/registration.module';
import { EventModule } from './modules/events/events.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    ignoreEnvFile: process.env.NODE_ENV === 'production',
  }), RedisConfig, RegistrationModule, EventModule, DatabaseModule],
})
export class AppModule {}
