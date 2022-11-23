import { NgModule } from '@angular/core';
import { CheckboxCategoryComponent } from './checkbox-category.component';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [
    NgForOf,
    AsyncPipe,
    MatCheckboxModule,
    MatCardModule
  ],
  declarations: [CheckboxCategoryComponent],
  providers: [],
  exports: [CheckboxCategoryComponent]
})
export class CheckboxCategoryComponentModule {
}
