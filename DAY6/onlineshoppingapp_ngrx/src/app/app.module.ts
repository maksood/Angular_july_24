import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from 'src/ngrx/reducers/products.reducer';
import { ListofproductsComponent } from './components/listofproducts/listofproducts.component';

@NgModule({
  declarations: [AppComponent, ListofproductsComponent],
  imports: [BrowserModule, StoreModule.forRoot({ products: productsReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
