import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { TruncatePipe } from './pipes/truncate.pipe'

import { ProductService } from './services/product.service'

import { AppComponent } from './app.component'
import { RatingComponent } from './components/rating/rating.component'
import { ProductsComponent } from './components/products/products.component'
import { ProductComponent } from './components/product/product.component'
import { BsJumbotronComponent } from './components/bs-jumbotron/bs-jumbotron.component'
import { UserFormComponent } from './components/user-form/user-form.component'
import { LoginComponent } from './components/login/login.component'

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
  providers: [ProductService],
  declarations: [
    AppComponent,
    RatingComponent,
    ProductsComponent,
    ProductComponent,
    TruncatePipe,
    BsJumbotronComponent,
    UserFormComponent,
    LoginComponent,
  ],
})
export class AppModule {}
