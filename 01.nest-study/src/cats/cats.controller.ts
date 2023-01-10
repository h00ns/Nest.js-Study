import { CatsService } from './cats.service';
import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('/cats')
export class CatsController {
  // 의존성 주입 (DI) => 컨트롤러(소비자)가 서비스(제품)를 주입받음 / 공급자는 모듈
  constructor(private readonly CatsService: CatsService) {}

  @Get()
  getAllCat() {
    return 'all cat';
  }

  @Get('/:id')
  getOneCat() {
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put('/:id')
  updateCat() {
    return 'update cat';
  }

  @Patch('/:id')
  patchCat() {
    return 'patch cat';
  }

  @Delete('/:id')
  deleteCat() {
    return 'delete cat';
  }
}
