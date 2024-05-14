import { Injectable } from '@nestjs/common';
import { ProductsController } from './products/products.controller';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello PMD !'; }
  postHello(): string {
    return 'Hello nath !';
    }
  }

