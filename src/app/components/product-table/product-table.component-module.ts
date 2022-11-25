import { NgModule } from '@angular/core';
import { ProductTableComponent } from './product-table.component';
import {MatTableModule} from "@angular/material/table";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTreeModule} from "@angular/material/tree";

@NgModule({
    imports: [
        MatTableModule,
        AsyncPipe,
        NgForOf,
        MatTabsModule,
        MatTreeModule
    ],
  declarations: [ProductTableComponent],
  providers: [],
  exports: [ProductTableComponent]
})
export class ProductTableComponentModule {
}
