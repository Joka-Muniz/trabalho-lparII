import { Module } from '@nestjs/common';
import { DonosService } from './donos.service';
import { DonosController } from './donos.controller';

@Module({
  imports: [],
  providers: [DonosService],
  controllers: [DonosController],
})
export class DonosModule {}
