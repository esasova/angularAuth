import { Component, OnInit } from '@angular/core';
import {ProductRepository} from "../../models/product.repository";
import {Product} from "../../models/product";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private repoistory: ProductRepository) { }

  ngOnInit(): void {
  }
  get products (): Product[] {
    return this.repoistory.getProducts()
  }
  get categories (): (string | undefined)[] {
    return this.repoistory.getCategories()
  }
}
