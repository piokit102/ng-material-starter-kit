import { NgModule } from '@angular/core';
import { SelectBoxComponent } from './select-box.component';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatChipsModule} from "@angular/material/chips";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  imports: [
    AsyncPipe,
    MatChipsModule,
    NgForOf,
    MatSelectModule
  ],
  declarations: [SelectBoxComponent],
  providers: [],
  exports: [SelectBoxComponent]
})
export class SelectBoxComponentModule {
}
