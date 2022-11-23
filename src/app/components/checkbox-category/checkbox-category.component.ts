import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CheckboxCategoryService } from '../../services/checkbox-category.service';
import {Observable} from "rxjs";
import {CheckboxCategoryModel} from "../../models/checkbox-category.model";

@Component({
  selector: 'app-checkbox-category',
  styleUrls: ['./checkbox-category.component.scss'],
  templateUrl: './checkbox-category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxCategoryComponent {

  readonly list$: Observable<CheckboxCategoryModel[]> = this._checkboxCategoryService.getAll();
  constructor(private _checkboxCategoryService: CheckboxCategoryService) {
  }
}
