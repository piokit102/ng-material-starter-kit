import { NgModule } from '@angular/core';
import { CategoriesListComponent } from './categories-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
    imports: [
        MatCardModule,
        MatListModule,
        AsyncPipe,
        NgForOf,
        MatCheckboxModule
    ],
  declarations: [CategoriesListComponent],
  providers: [],
  exports: [CategoriesListComponent]
})
export class CategoriesListComponentModule {
}
