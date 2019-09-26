import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: any = {};
  @Input() index: number;

  @Output() selectedProduct: EventEmitter<number>;


  constructor(private router:Router) { }

  ngOnInit() {
    console.log('hello', this.product.ProductName);
  }

  addProduct(){
    // console.log(this.index);
    this.router.navigate(['/cart', this.index])
    // this.selectedHeroe.emit( this.index );
  }

}
