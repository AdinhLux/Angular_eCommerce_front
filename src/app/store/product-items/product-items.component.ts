import {Component, Input} from '@angular/core';
import {IProduct} from "../../shared/models/product";
import {BasketService} from "../../basket/basket.service";

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent {
  @Input() product?: IProduct; // ? means 'product' is nullable

  constructor(private basketService: BasketService) {
  }

  addItemToBasket() {
    // This kind of coding means we can execute the method if there is a product
    this.product && this.basketService.addItemToBasket(this.product);
  }
}
