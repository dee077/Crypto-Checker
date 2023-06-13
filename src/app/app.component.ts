<<<<<<< HEAD
import { CurrencyService } from './service/currency.service';
=======
>>>>>>> master
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
<<<<<<< HEAD
  selectedCurrency : string = "INR";
  constructor(private currencyService : CurrencyService){

  }
  sendCurrency(event:string){
    console.log(event);
    this.currencyService.setCurrency(event);
  }
=======
  title = 'Crypto-Checker';
>>>>>>> master
}
