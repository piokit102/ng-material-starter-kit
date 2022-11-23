import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import {Observable} from "rxjs";
import {CheckboxCategoryModel} from "../../models/checkbox-category.model";

@Component({
  selector: 'app-menu-category',
  styleUrls: ['./menu-category.component.scss'],
  templateUrl: './menu-category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuCategoryComponent {
  constructor(private _categoriesService: CategoriesService) {
  }

  readonly list$: Observable<CheckboxCategoryModel[]> = this._categoriesService.getAll();
}
