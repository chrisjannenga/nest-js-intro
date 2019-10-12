import { ProductService } from './products.service';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { Product } from './product.model';

@Controller('products')

export class ProductsController {
    constructor(private productsService: ProductService) {}

    @Get()
    getProducts(): Product[] {
       return this.productsService.getAll()
    }

    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDescription: string,
        @Body('price') prodPrice: number ): { id: string } {
        const generateId = this.productsService.insertProduct(prodTitle, prodDescription, prodPrice)
        return {id: generateId};
    }
}
