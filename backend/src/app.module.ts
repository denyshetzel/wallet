import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerminusModule } from '@nestjs/terminus';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './api/category/category.module';
// import { HealthController } from './core/health/health.controller';
import { LaunchModule } from './api/launch/launch.module';

@Module({
  imports: [CategoryModule, LaunchModule, TypeOrmModule.forRoot(), /* TerminusModule */],
  controllers: [AppController, /* HealthController */],
  providers: [AppService],
})
export class AppModule {}
