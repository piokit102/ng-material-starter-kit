import { NgModule } from '@angular/core';
import { CatFactComponent } from './cat-fact.component';
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [
    AsyncPipe,
    NgIf,
  ],
  declarations: [CatFactComponent],
  providers: [],
  exports: [CatFactComponent]
})
export class CatFactComponentModule {
}
