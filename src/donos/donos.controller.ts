import { Controller, Get, Post, Body } from '@nestjs/common';
import { DonosService } from './donos.service';
import { CreateDonosDto } from './dtos/create-donos.dto';

@Controller('donos')
export class DonosController {
  constructor(private donosService: DonosService) {}

  @Get()
  findAll() {
    return this.donosService.findAll();
  }

  @Post()
  create(@Body() donos: CreateDonosDto) {
    return this.donosService.create(donos);
  }
}
