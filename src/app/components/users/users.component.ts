import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import {UsersModel} from "../../models/users.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  readonly usersDetails$: Observable<UsersModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._usersService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _usersService: UsersService) {
  }
}
