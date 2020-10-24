import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/models';
import * as fromRoot from '../../../../../store/app.reducer';
import { UsersActions } from '../../../../../store/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail-information',
  templateUrl: './user-detail-information.component.html',
  styleUrls: ['./user-detail-information.component.scss'],
})
export class UserDetailInformationComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.user$ = this.store.select(fromRoot.getUser);
  }
}
