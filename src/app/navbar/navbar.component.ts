import { Component } from '@angular/core';
import { faBitcoinSign } from '@fortawesome/free-solid-svg-icons';
import { faRupee } from '@fortawesome/free-solid-svg-icons';
import { faUsd } from '@fortawesome/free-solid-svg-icons';
import { CurrencyService } from '../Service/currency.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    private currencyService: CurrencyService,
    private router: Router
  ) {}
  faBitcoinSign = faBitcoinSign;
  faRupee = faRupee;
  faUsd = faUsd;
  currency = 'INR';
  sendCurrency(event: string) {
    console.log(event);
    this.currencyService.setCurrency(event);
  }
  goToHome() {
    this.router.navigate(['/']);
  }
}
