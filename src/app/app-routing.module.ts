import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StoreComponent} from "./store/store.component";
import {ProductItemsComponent} from "./store/product-items/product-items.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'store', component: StoreComponent},
  {path: 'store/:id', component: ProductItemsComponent},
  {path: '**', redirectTo: '', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
