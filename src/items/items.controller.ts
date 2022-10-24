import { Controller, Get } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  // GETメソッドのハンドラを作成する
  @Get()
  findAll() {
    return 'this is findAll';
  }
}
