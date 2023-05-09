import {Component} from '@angular/core';
import {StoreService} from "../store.service";
import {IProduct} from "../../shared/models/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product?: IProduct;

  constructor(
    private storeService: StoreService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.storeService.getProductById(id).subscribe({
        next: (response) => {
          this.product = response;
        }, error: (error) => console.log(error)
      });
    }
  }
}
