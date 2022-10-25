import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.model';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  // この1行を追加するだけで、NestJSがサービスクラスをインスタンス化し、変数に代入してくれます。
  // 変数はitemsServiceのこと
  constructor(private readonly itemsService: ItemsService) {}

  // GETメソッドのハンドラを作成する
  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  // idをパスとして受け取る方法で実装する
  // /items/uuid
  // uuidの部分を可変にしたいなら、引数の前にコロンを入れる
  // ハンドラーメソッド独自のパスを設定する場合、このHTTPメソッドデコレータの中に文字列で記述します。
  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string): Item {
    return this.itemsService.findById(id);
  }

  // POSTメソッドのハンドラを作成する
  @Post()
  create(@Body() createItemDto: CreateItemDto): Item {
    return this.itemsService.create(createItemDto);
  }

  @Patch(':id')
  updateStatus(@Param('id', ParseUUIDPipe) id: string): Item {
    return this.itemsService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string): void {
    this.itemsService.delete(id);
  }
}
