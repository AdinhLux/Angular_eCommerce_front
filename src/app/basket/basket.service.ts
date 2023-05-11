import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Basket, IBasket, IBasketItem} from "../shared/models/basket";
import {IProduct} from "../shared/models/product";

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl = 'http://localhost:9010';

  constructor(private http: HttpClient) {
  }

  // Our dynamic variable, when we add or remove items. Default value is NULL
  private basketSource = new BehaviorSubject<Basket | null>(null);
  basketSource$ = this.basketSource.asObservable();

  getBasket(username: string) {
    return this.http.get<IBasket>(this.baseUrl + '/Basket/GetBasket/rahul').subscribe({
      // Update the basketSource so that via observable these values will be available to the subscribers via component
      next: basket => {
        this.basketSource.next(basket);
      }
    });
  }

  setBasket(basket: IBasket) {
    return this.http.post<IBasket>(this.baseUrl + '/Basket/CreateBasket', basket).subscribe({
      next: basket => {
        this.basketSource.next(basket);
      }
    });
  }

  getCurrentBasket() {
    return this.basketSource.value;
  }

  // Basket operations starts here
  addItemToBasket(item: IProduct, quantity = 1) {
    const itemToAdd: IBasketItem = this.mapProductItemToBasketItem(item);
    const basket = this.getCurrentBasket() ?? this.createBasket();

    // Now items can be added in the basket
    basket.items = this.addOrUpdateItem(basket.items, itemToAdd, quantity);
    this.setBasket(basket);
  }


  // #########################################################################################
  // #########################################################################################
  // #########################################################################################

  private mapProductItemToBasketItem(item: IProduct): IBasketItem {
    return {
      productId: item.id,
      productName: item.name,
      price: item.price,
      imageFile: item.imageFile,
      quantity: 0
    }
  }

  private createBasket(): Basket {
    // Since we have created class
    const basket = new Basket();
    localStorage.setItem('basket_username', 'rahul'); //TODO: rahul can be replaced with LoggedIn User
    return basket;
  }

  private addOrUpdateItem(items: IBasketItem[], itemToAdd: IBasketItem, quantity: number): IBasketItem[] {
    // If we have the item in basket which matches the Id, then we can get here
    const item = items.find(x => x.productId == itemToAdd.productId);
    if (item) {
      item.quantity += quantity;
    } else {
      itemToAdd.quantity = quantity;
      // Then add the items in the basket
      items.push(itemToAdd);
    }
    return items;
  }
}
