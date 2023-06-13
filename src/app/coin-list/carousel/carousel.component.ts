import { Component } from '@angular/core';
import { ApiService } from 'src/app/Api/api.service';
import { CurrencyService } from 'src/app/Service/currency.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  constructor(private api: ApiService, private CurrencyServie: CurrencyService){}
  ngOnInit(): void{
      this.getBannerData();
      this.CurrencyServie.getCurrency()
      .subscribe(val=>{
          this.currency=val;
          this.getBannerData();
      });

      setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.cards.length;
      }, 2000);
  }
  bannerData : any = [];
  currency:string="INR";
  getBannerData(){
      this.api.getTrendingCoins(this.currency)
      .subscribe(res=>{
           this.bannerData=res;
      });
      console.log(this.bannerData);
  }

  cards: string[] = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];
  activeIndex: number = 0;

  // owl carousel
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    autoplay: true,
    autoplayTimeout: 1700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
}
