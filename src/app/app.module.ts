import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NftComponent } from './nft/nft.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { StatsPreviewComponent } from './stats-preview/stats-preview.component';
import { RatingContainerComponent } from './rating-container/rating-container.component';
import { ThankYouContainerComponent } from './thank-you-container/thank-you-container.component';

const appRoutes: Routes = [
  { path: '', component: NftComponent },
  { path: 'product', component: ProductCardComponent },
  { path: 'order', component: OrderSummaryComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'stats', component: StatsPreviewComponent },
  { path: 'rating', component: RatingContainerComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    OrderSummaryComponent,
    NftComponent,
    ProductCardComponent,
    NavigationComponent,
    ResultsComponent,
    StatsPreviewComponent,
    RatingContainerComponent,
    ThankYouContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
