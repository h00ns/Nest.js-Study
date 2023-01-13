import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat, CatSchema } from './cats.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema}])],
  controllers: [CatsController],
  providers: [CatsService],
  // exports시 imports한 다른 모듈에서 사용가능
  exports: [],
})
export class CatsModule {}
