import { Injectable } from '@nestjs/common';
import { CreateAutomoveisDto } from './dtos/create-automoveis.dto';

global.automoveis = [];

@Injectable()
export class AutomoveisService {
  findAll(): any[] {
    return global.automoveis;
  }

  create(automoveis: CreateAutomoveisDto) {
    global.automoveis.push(automoveis);
  }
}
