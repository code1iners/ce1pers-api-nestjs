import { Module } from '@nestjs/common';
import { WeathersService } from './weathers.service';
import { WeathersResolver } from './weathers.resolver';

@Module({
  providers: [WeathersService, WeathersResolver],
})
export class WeathersModule {}
