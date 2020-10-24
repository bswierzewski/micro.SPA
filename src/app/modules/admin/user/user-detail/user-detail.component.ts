import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/core/services';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/models';
import * as fromRoot from '../../../../store/app.reducer';
import { UsersActions } from '../../../../store/actions';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean>;
  user$: Observable<User>;

  constructor(
    private store: Store<fromRoot.State>,
    private alertService: AlertService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.user$ = this.store.select(fromRoot.getUser);
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.store.dispatch(UsersActions.loadUser({ id: Number(params.id) }));
      }
    });
  }

  ngOnDestroy(): void {}
}
