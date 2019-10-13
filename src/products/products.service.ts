import { Product } from './product.model';
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductService {
    products: Product[] = [];

    insertProduct(title: string, description: string, price: number) {
        const newProduct = new Product(new Date().toString(), title, description, price);
        this.products.push(newProduct);
        return newProduct.id;
    }

    getAll() {
        return this.products;
    }

    getOne(index: string) {
        return this.products[index];
    }
}