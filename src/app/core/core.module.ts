import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterModule} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import { UnAuthenticatedComponent } from './un-authenticated/un-authenticated.component';


@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent,
    UnAuthenticatedComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent]
})
export class CoreModule {
}
