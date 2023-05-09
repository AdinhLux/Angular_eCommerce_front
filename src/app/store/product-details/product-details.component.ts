import {Component} from '@angular/core';
import {StoreService} from "../store.service";
import {IProduct} from "../../shared/models/product";
import {ActivatedRoute} from "@angular/router";
import {BreadcrumbService} from "xng-breadcrumb";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product?: IProduct;

  constructor(
    private storeService: StoreService,
    private activatedRoute: ActivatedRoute,
    private bcService: BreadcrumbService,
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
          // Replace product UUID with its name in the BreadCrumbs (used for navigating between nested pages)
          this.bcService.set('@productDetails', response.name);
        }, error: (error) => console.log(error)
      });
    }
  }
}
