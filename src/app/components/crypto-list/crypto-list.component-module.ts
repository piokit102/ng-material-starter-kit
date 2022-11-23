import { NgModule } from '@angular/core';
import { CryptoListComponent } from './crypto-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    AsyncPipe,
    NgForOf,
    MatChipsModule
  ],
  declarations: [CryptoListComponent],
  providers: [],
  exports: [CryptoListComponent]
})
export class CryptoListComponentModule {
}
