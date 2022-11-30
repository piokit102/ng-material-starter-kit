import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AgeModel } from '../../models/age.model';
import { AgeService } from '../../services/age.service';

@Component({
  selector: 'app-age',
  styleUrls: ['./age.component.scss'],
  templateUrl: './age.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgeComponent {
  readonly ageDetails$: Observable<AgeModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._ageService.getOne(data['names'])));

  constructor(private _activatedRoute: ActivatedRoute, private _ageService: AgeService) {
  }
}
