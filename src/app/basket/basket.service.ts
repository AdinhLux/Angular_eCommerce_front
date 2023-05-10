import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Basket, IBasket} from "../shared/models/basket";

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl = 'https://localhost:9010';

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
}
