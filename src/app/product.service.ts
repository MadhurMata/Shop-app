import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  img:string = "../assets/img/defaultProfilePhoto.png"
  private product:Product[] = [
    {
      type: "Noob",
      productName: "Luis",
      img: this.img,
      description: "Vegan home made portuguese",
      price: 100,
      stock: "Stock 1",            
    },
    {
      type: "Noob",
      productName: "Iulia",
      img: this.img,
      description: "The power of order and law",
      price: 100,
      stock: "Stock 1",
    },
    {
      type: "Noob",
      productName: "David",
      img: this.img,
      description: "The tower",
      price: 100,
      stock: "Stock 1",      
    },
    {
      type: "Noob",
      productName: "Felipe",
      img: this.img,
      description: "His days have 342h",
      price: 100,
      stock: "Stock 1",
    },
    {
      type: "Noob",
      productName: "Rúben",
      img: this.img,
      description: "He never cooks",
      price: 100,
      stock: "Stock 1",
    },
    {
      type: "Noob",
      productName: "Madhur",
      img: this.img,
      description: "El Españolito",
      price: 100,
      stock: "Stock 1",
    }
  ]

  constructor() {
    console.log('service is ready for been used');
   }

   getProducts():Product[] {
    return this.product;
  };

  getPoduct(idx: string) {
    return this.product[idx];
  };

}

export interface Product {
  type:string;
  productName:string; 
  description:string; 
  img:string; 
  price:number; 
  stock:string;
  idx?:number;
}