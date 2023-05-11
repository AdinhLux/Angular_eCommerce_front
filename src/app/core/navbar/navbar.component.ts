import {Component} from '@angular/core';
import {BasketService} from "../../basket/basket.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public basketService: BasketService) {
  }

}
