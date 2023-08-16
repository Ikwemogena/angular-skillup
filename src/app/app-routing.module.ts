import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NftComponent } from './nft/nft.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
