import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutomoveisModule } from './automoveis/automoveis.module';
import { DonosModule } from './donos/donos.module';

@Module({
  imports: [AutomoveisModule, DonosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
