import { Injectable } from '@angular/core';
import {Product} from "./models/product";
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  constructor() { }
  private products: Product[] = [
    new Product(1, 'Product1', 'category1', 'description', 100),
    new Product(2, 'Product2', 'category1', 'description', 100),
    new Product(3, 'Product3', 'category1', 'description', 100),
    new Product(4, 'Product4', 'category1', 'description', 100),
    new Product(5, 'Product5', 'category2', 'description', 100),
    new Product(6, 'Product6', 'category2', 'description', 100),
    new Product(7, 'Product7', 'category2', 'description', 100)
  ]
  getProducts(): Observable<Product[]> {
    return from([this.products])
  }
}
