import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./core/not-found/not-found.component";
import {UnAuthenticatedComponent} from "./core/un-authenticated/un-authenticated.component";
import {ServerErrorComponent} from "./core/server-error/server-error.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'un-authenticated', component: UnAuthenticatedComponent},
  {path: 'server-error', component: ServerErrorComponent},
  // LAZY LOADING : for loading module only when clicking on STORE (best practice for App performance)
  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then(mod => mod.StoreModule),
    data: {breadcrumb: 'Store'}
  },
  {path: '**', redirectTo: '', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
