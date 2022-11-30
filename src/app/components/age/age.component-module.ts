import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgeComponent } from './age.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AgeComponent],
  providers: [],
  exports: [AgeComponent]
})
export class AgeComponentModule {
}
