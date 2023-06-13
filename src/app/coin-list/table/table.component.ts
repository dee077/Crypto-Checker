import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/Api/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { CurrencyService } from 'src/app/Service/currency.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  displayedColumns: string[] = ['symbol', 'current_price', 'price_change_percentage_24h', 'market_cap'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: ApiService, private router: Router, private CurrencyServie: CurrencyService){}
  ngOnInit(): void{
      this.getTableData();
      this.CurrencyServie.getCurrency()
        .subscribe(val=>{
            this.currency=val;
            this.getTableData();
        });
  }
  currency: string="INR";
  tableData: any=[];
  getTableData(){
      this.api.getCoinsList(this.currency)
      .subscribe(res=>{
          this.tableData=res;
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToDetails(row:any){
      this.router.navigate(['graph-page',row.id]);
      // console.log(row);
  }
}
