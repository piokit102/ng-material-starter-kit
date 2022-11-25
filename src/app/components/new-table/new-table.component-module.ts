import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { NewTableComponent } from './new-table.component';

@NgModule({
  imports: [MatTableModule],
  declarations: [NewTableComponent],
  providers: [],
  exports: [NewTableComponent]
})
export class NewTableComponentModule {
}
