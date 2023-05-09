import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreComponent} from './store.component';
import {ProductItemsComponent} from './product-items/product-items.component';
import {SharedModule} from "../shared/shared.module";
import {ProductDetailsComponent} from './product-details/product-details.component';
import {StoreRoutingModule} from './store-routing.module';


@NgModule({
  declarations: [
    // No more need for exporting StoreComponent. It will be loaded inside this module, when using the lazy loading on app-routing.ts
    StoreComponent,
    ProductItemsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreRoutingModule
  ]
})
export class StoreModule {
}
