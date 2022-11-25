import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-new-table',
  styleUrls: ['./new-table.component.scss'],
  templateUrl: './new-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTableComponent {
  constructor(private _productsService: ProductsService) {
  }

  readonly data$: Observable<ProductModel[]> = this._productsService.getAll();
  displayeddColumns: string[] = ['image', 'title', 'category', 'price'];

}
