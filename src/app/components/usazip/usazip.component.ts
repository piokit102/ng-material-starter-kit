import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { USaService } from '../../services/usa.service';
import {USaModel} from "../../models/usa.model";

@Component({
  selector: 'app-usazip',
  templateUrl: './usazip.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsazipComponent {
  readonly zipDetails$: Observable<USaModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._uSaService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _uSaService: USaService) {
  }
}
