import { NgModule } from '@angular/core';
import { MenuCategoryComponent } from './menu-category.component';
import {MatMenuModule} from "@angular/material/menu";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    MatMenuModule,
    AsyncPipe,
    NgForOf,
    MatButtonModule
  ],
  declarations: [MenuCategoryComponent],
  providers: [],
  exports: [MenuCategoryComponent]
})
export class MenuCategoryComponentModule {
}
