import { Module } from '@nestjs/common';
import { LaunchController } from './launch.controller';
import { LaunchService } from './launch.service';
import { Launch } from './launch.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Launch])],
  controllers: [LaunchController],
  providers: [LaunchService]
})
export class LaunchModule {}
