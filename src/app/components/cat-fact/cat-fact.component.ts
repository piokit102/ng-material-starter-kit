import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CatsFactsService } from '../../services/cats-facts.service';
import {Observable} from "rxjs";


@Component({
  selector: 'app-cat-fact',
  styleUrls: ['./cat-fact.component.scss'],
  templateUrl: './cat-fact.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatFactComponent {

  readonly list$: Observable<any> = this._catsFactsService.getAll();
  constructor(private _catsFactsService: CatsFactsService) {
  }
}
