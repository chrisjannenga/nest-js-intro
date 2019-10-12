import { ProductService } from './products.service';
import { ProductsController } from './products.controller';
import { Module } from "@nestjs/common";

@Module({
    imports: [],
    controllers: [ProductsController],
    providers: [ProductService]
})

export class ProductsModule {}