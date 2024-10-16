import { Injectable } from '@nestjs/common';
import { CreateDonosDto } from './dtos/create-donos.dto';

global.donos = [];

@Injectable()
export class DonosService {
  findAll(): any[] {
    return global.donos;
  }

  create(donos: CreateDonosDto) {
    global.donos.push(donos);
  }
}

