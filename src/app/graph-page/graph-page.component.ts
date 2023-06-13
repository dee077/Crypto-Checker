import { Component,OnInit,ViewChild  } from '@angular/core';
import { ApiService } from '../Api/api.service';
import {ActivatedRoute} from '@angular/router';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CurrencyService } from '../Service/currency.service';

@Component({
  selector: 'app-graph-page',
  templateUrl: './graph-page.component.html',
  styleUrls: ['./graph-page.component.scss']
})
export class GraphPageComponent {
    coinData:any;
    coinId!:string;
    days:number=1;
    currency:string="INR";
    public lineChartData: ChartConfiguration['data'] = {
        datasets: [
          {
            data: [],
            label: `Price Trends`,
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'white',
            pointBackgroundColor: 'white',
            pointBorderColor: 'white',
            pointHoverBackgroundColor: 'white',
            pointHoverBorderColor: 'white',
    
          }
        ],
        labels: []
      };
      public lineChartOptions: ChartConfiguration['options'] = {
        elements: {
          point: {
            radius: 1
          }
        },
    
        plugins: {
          legend: { display: true },
        }
      };
      public lineChartType: ChartType = 'line';
      @ViewChild (BaseChartDirective) myLineChart !: BaseChartDirective;
    constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private CurrencyService: CurrencyService){}
    ngOnInit(): void{
        this.activatedRoute.params.subscribe(val=>{
            this.coinId=val['id'];
        });
        this.getCoinData();
        this.getGraphData(this.days);
        this.CurrencyService.getCurrency()
        .subscribe(val=>{
            this.currency=val;
            this.getGraphData(this.days);
            this.getCoinData();
        });
    }
    getCoinData(){
        this.api.getCurrencyById(this.coinId)
        .subscribe(res=>{
            
            // console.log(res);
            if(this.currency === "USD"){
                res.market_data.current_price.inr=res.market_data.current_price.usd;
                res.market_data.current_price.inr=res.market_data.current_price.usd;
            }
            res.market_data.current_price.inr=res.market_data.current_price.inr;
            res.market_data.current_price.inr=res.market_data.current_price.inr;
            this.coinData=res;
        })
        console.log(this.coinData);
        
    }
    getGraphData(days:number){
        this.days=days;
        this.api.getGraphData(this.coinId,this.currency,days)
        .subscribe(res=>{
            setTimeout(() => {
                this.myLineChart.chart?.update();
              }, 200);
            this.lineChartData.datasets[0].data = res.prices.map((a:any)=>{
                return a[1];
            });
            this.lineChartData.labels = res.prices.map((a:any)=>{
                let date = new Date(a[0]);
                let time = date.getHours() > 12 ?
                `${date.getHours() - 12}: ${date.getMinutes()} PM` :
                `${date.getHours()}: ${date.getMinutes()} AM`
                return this.days === 1 ? time : date.toLocaleDateString();
            });
        });
    }
}
