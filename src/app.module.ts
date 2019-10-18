import { ProductsModule } from './products/products.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // tslint:disable-next-line: max-line-length
    MongooseModule.forRoot('mongodb+srv://admin:S@G3M@R13J@mongo-nest-intro-qh3pj.mongodb.net/nestjs-demo?retryWrites=true&w=majority', { useNewUrlParser: true }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
