import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
  readonly productDetail$: Observable<ProductModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._productsService.getOne(data['x'])));

  constructor(private _productsService: ProductsService, private _activatedRoute: ActivatedRoute) {
  }
}
