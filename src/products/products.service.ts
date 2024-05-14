import { Injectable } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Injectable()
export class ProductsService {
    constructor(private readonly  AppService: AppService) {}

    getProducts(): string {
        return this.AppService.getHello + 'cars bikes'; }

    saveProduct(product: {}) {
        //save product to data base
        console.log('product saved')
            const productSaved = {
                id: '1',
                ...product
            }
            return productSaved
    }
    
    getAllProducts(): string[] {
        return ['Lamborgini','Ferrari','Tesla'];}

    getAllPrices(): string[] {
        return ['one million $',' two millions $',' 50 millions francs cfa '];
            }
        }
    



 

