import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IPagination} from "../shared/models/pagination";
import {IProduct} from "../shared/models/product";
import {IBrand} from "../shared/models/brand";
import {IType} from "../shared/models/type";
import {StoreParams} from "../shared/models/storeParams";

@Injectable({
  providedIn: 'root' // 'root' is app-module.ts
})
export class StoreService {

  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://localhost:9010/';

  getProducts(storeParams: StoreParams) {

    // FILTERING parameters for getting specific products
    let params = new HttpParams();

    if (storeParams.brandId) {
      params = params.append('brandId', storeParams.brandId);
    }
    if (storeParams.typeId) {
      params = params.append('typeId', storeParams.typeId);
    }

    //SEARCHING
    if (storeParams.search) {
      params = params.append('search', storeParams.search);
    }

    // SORTING
    params = params.append('sort', storeParams.sort);

    // PAGINATION
    params = params.append('pageIndex', storeParams.pageNumber);
    params = params.append('pageSize', storeParams.pageSize);

    return this.http.get<IPagination<IProduct[]>>(this.baseUrl + 'Catalog/GetAllProducts', {params})
  }

  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'Catalog/GetAllBrands');
  }

  getTypes() {
    return this.http.get<IType[]>(this.baseUrl + 'Catalog/GetAllTypes');
  }

  getProductById(id: string) {
    return this.http.get<IProduct>(this.baseUrl + 'Catalog/GetProductById/' + id);
  }
}
