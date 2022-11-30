import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './carts.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CartsComponent],
  providers: [],
  exports: [CartsComponent]
})
export class CartsComponentModule {
}
