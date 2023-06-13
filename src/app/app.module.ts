import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CoinListComponent } from './coin-list/coin-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GraphPageComponent } from './graph-page/graph-page.component';
import { BannerComponent } from './coin-list/banner/banner.component';
import { TableComponent } from './coin-list/table/table.component';
import { NgbModule, NgbCarouselModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { NgChartsModule } from 'ng2-charts';
import { CarouselComponent } from './coin-list/carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoinListComponent,
    GraphPageComponent,
    BannerComponent,
    TableComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FontAwesomeModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbCarouselModule,
    NgbDropdownModule,
    NgImageSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    NgChartsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
