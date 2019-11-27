import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { ProductService } from './services/product.service'

import { AppComponent } from './app.component'
import { RatingComponent } from './components/rating/rating.component'
import { ProductsComponent } from './components/products/products.component'
import { ProductComponent } from './components/product/product.component'

@NgModule({
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  providers: [ProductService],
  declarations: [
    AppComponent,
    RatingComponent,
    ProductsComponent,
    ProductComponent,
  ],
})
export class AppModule {}
