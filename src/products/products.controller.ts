import { Get, Query, Header, Controller, Post, Body, Res,Req, HttpStatus, Param, Logger, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Response } from 'express';
import { request } from 'http';
@Controller('products')
export class ProductsController {
    constructor(private readonly  ProductsService: ProductsService) {}

    @Get('/allproducts')
    getAllProducts(): string [] {
        return this.ProductsService.getAllProducts()
    }

    @Get('/name/:idname')
    getProductByID(@Param('idname') pname: string): string {
        return  pname
    }
    @Post()
    getProducts(@Res() response:Response, @Body() body: []): Response {
        console.log(body)
        if ( body['pName'] && body['pType']) {
            const productSaved= this.ProductsService.saveProduct(body)
            return response.status(HttpStatus.OK).send(JSON.stringify(productSaved))
        } else {
            response.status(HttpStatus.BAD_REQUEST).send("This is a Bad request");
        }
    }
}


