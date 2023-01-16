import { MongooseModule } from '@nestjs/mongoose';
import { forwardRef, Module } from '@nestjs/common';
import { CatsController } from './controller/cats.controller';
import { CatsService } from './service/cats.service';
import { Cat, CatSchema } from './cats.schema';
import { CatsRepository } from './cats.repository';
import { AuthModule } from 'src/auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      // destination './upload 라는 폴더에 저장이된다 !
      dest: './upload'
    }),
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
    forwardRef(() => AuthModule)
  ],
  controllers: [CatsController],
  providers: [CatsService, CatsRepository],
  // exports시 imports한 다른 모듈에서 사용가능
  exports: [CatsService, CatsRepository],
})
export class CatsModule {}
