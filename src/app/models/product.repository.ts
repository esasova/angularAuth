import { Injectable } from "@angular/core";
import { Product} from "./product";
import {StaticDataService} from "../static-data.service";

@Injectable()
export class ProductRepository {
  private products: Product[] = []
  private categories: string[] = []
  constructor(private dataService: StaticDataService) {
    dataService.getProducts().subscribe((data) => {
      this.products = data
      this.categories = data.map(el => el.category).filter((c, index, array) => array.indexOf(c) === index).sort()
    })
  }
  getProducts (category: string = null):Product[] {
    return this.products.filter(p => category == null || category == p.category)
  }
}
