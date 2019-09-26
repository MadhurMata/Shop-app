import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../product.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products:Product[] = [];

  constructor(private productService:ProductService) { 

  }
  
  ngOnInit() {
    this.products = this.productService.getProducts();
    console.log(this.products);
  }

}
