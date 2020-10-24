import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/core/services';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/models';
import * as fromRoot from '../../../../store/app.reducer';
import { UsersActions } from '../../../../store/actions';
import { ActivatedRoute } from '@angular/router';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean>;
  user$: Observable<User>;

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];

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
