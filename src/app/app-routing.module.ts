<<<<<<< HEAD
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo :'coin-list', pathMatch:'full'},
  {path:'coin-list', component: CoinListComponent},
  {path:'coin-detail/:id', component: CoinDetailComponent}
=======
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphPageComponent } from './graph-page/graph-page.component';
import { CoinListComponent } from './coin-list/coin-list.component';
const routes: Routes = [
  {path: '', redirectTo: 'coin-list', pathMatch: 'full'},
  {path: 'coin-list', component: CoinListComponent},
  {path: 'graph-page/:id', component: GraphPageComponent},
>>>>>>> master
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
