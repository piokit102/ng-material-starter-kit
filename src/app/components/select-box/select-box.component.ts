import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {SelectBoxModel} from "../../models/select-box.model";
import {SelectBoxService} from "../../services/select-box.service";

@Component({
  selector: 'app-select-box',
  styleUrls: ['./select-box.component.scss'],
  templateUrl: './select-box.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectBoxComponent {
  readonly list$: Observable<SelectBoxModel[]> = this._selectBoxService.getAll();

  constructor(private _selectBoxService: SelectBoxService) {
  }
}
