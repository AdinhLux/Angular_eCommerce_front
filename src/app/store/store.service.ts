import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPagination} from "../shared/models/pagination";
import {IProduct} from "../shared/models/product";
import {IBrand} from "../shared/models/brand";
import {IType} from "../shared/models/type";

@Injectable({
  providedIn: 'root' // 'root' is app-module.ts
})
export class StoreService {

  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://localhost:9010/';

  getProducts() {
    return this.http.get<IPagination<IProduct[]>>(this.baseUrl + 'Catalog/GetAllProducts')
  }

  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'Catalog/GetAllBrands');
  }

  getTypes() {
    return this.http.get<IType[]>(this.baseUrl + 'Catalog/GetAllTypes');
  }
}
