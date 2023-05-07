import {Component, OnInit} from '@angular/core';
import {StoreService} from "./store.service";
import {IProduct} from "../shared/models/product";
import {IBrand} from "../shared/models/brand";
import {IType} from "../shared/models/type";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  products: IProduct[] = [];
  brands: IBrand[] = [];
  types: IType[] = [];

  constructor(private storeService: StoreService) {
  }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts() {
    this.storeService.getProducts().subscribe(
      {
        next: (response) => {
          this.products = response.data;
          console.log(response);
        },
        error: error => console.log(error),
        complete: () => console.log('Catalog API call completed')
      }
    )
  }

  getBrands() {
    this.storeService.getBrands().subscribe({
      next: response => {
        this.brands = [{id: '', name: 'All'}, ...response]
      },
      error: error => console.log(error)
    });
  }

  getTypes() {
    this.storeService.getTypes().subscribe({
      next: response => {
        this.types = [{id: '', name: 'All'}, ...response]
      },
      error: error => console.log(error)
    });
  }
}
