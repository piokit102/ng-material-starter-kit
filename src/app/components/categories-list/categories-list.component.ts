import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import {Observable} from "rxjs";
import {CategoryModel} from "../../models/category.model";

@Component({
  selector: 'app-categories-list',
  styleUrls: ['./categories-list.component.scss'],
  templateUrl: './categories-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesListComponent {
  readonly list$: Observable<CategoryModel[]> = this._categoriesService.getAll();
  constructor(private _categoriesService: CategoriesService) {

  }
}
