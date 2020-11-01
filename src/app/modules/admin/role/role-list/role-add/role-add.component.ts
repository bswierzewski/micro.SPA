import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Role } from 'src/app/shared/models';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../../store/app.reducer';
import { RoleActions } from 'src/app/store/actions';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss'],
})
export class RoleAddComponentDialog implements OnInit, OnDestroy {
  model = new Role();
  isSubscribe = true;
  isAdding$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>, private dialogRef: MatDialogRef<RoleAddComponentDialog>) {}

  ngOnInit(): void {
    this.isAdding$ = this.store.select(fromRoot.getIsAddingRoles);
    this.store
      .select(fromRoot.getIsAddedRoles)
      .pipe(takeWhile((x) => this.isSubscribe))
      .subscribe((added) => {
        if (added) {
          this.store.dispatch(RoleActions.loadRoles());
          this.dialogRef.close();
        }
      });
  }

  ngOnDestroy(): void {
    this.isSubscribe = false;
  }

  onSubmitClick(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.store.dispatch(RoleActions.addRole({ role: this.model }));
  }
}
