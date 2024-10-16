import { Controller, Get, Post, Body } from '@nestjs/common';
import { AutomoveisService } from './automoveis.service';
import { CreateAutomoveisDto } from './dtos/create-automoveis.dto';

@Controller('automoveis') 
export class AutomoveisController {
  constructor(private automoveisService: AutomoveisService) {}

  @Get()
  findAll() {
    return this.automoveisService.findAll();
  }

  @Post()
  create(@Body() automoveis: CreateAutomoveisDto) {
    return this.automoveisService.create(automoveis);
  }
}

