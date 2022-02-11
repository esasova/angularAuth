import { Injectable } from "@angular/core";
import { Product} from "./product";
import {StaticDataService} from "../static-data.service";

@Injectable()
export class ProductRepository {
  private products: Product[] = []
  private categories: (string | undefined)[] = []
  constructor(private dataService: StaticDataService) {
    dataService.getProducts().subscribe((data) => {
      this.products = data
      this.categories = data.map(el => el.category).filter((c, index, array) => array.indexOf(c) === index).sort()
    })
  }
  getProducts (category?: string):Product[] {
    return this.products.filter(p => category == null || category == p.category)
  }
  getOneProduct (id: number):Product {
    return <Product>this.products.find(el => el.id == id)
  }
  getCategories ():(string | undefined)[] {
    return this.categories
}
}
