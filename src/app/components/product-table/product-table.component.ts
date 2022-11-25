import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-product-table',
  styleUrls: ['./product-table.component.scss'],
  templateUrl: './product-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductTableComponent {
  constructor(private _productsService: ProductsService) {
  }

  readonly data$: Observable<ProductModel[]> = this._productsService.getAll();

  displayedColumns: string[] = ['image'];

}
