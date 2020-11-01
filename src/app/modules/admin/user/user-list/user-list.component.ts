import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/core/services';
import { select, Store } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';
import { User } from 'src/app/shared/models';
import * as fromRoot from '../../../../store/app.reducer';
import { UsersActions } from '../../../../store/actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, OnDestroy, AfterViewInit {
  displayColumns: string[] = ['action', 'id', 'username', 'email', 'created', 'lastActive'];

  isSubscribe = true;
  isLoading$: Observable<boolean>;
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store: Store<fromRoot.State>, private alertService: AlertService) {}

  ngOnInit(): void {
    this.store.dispatch(UsersActions.loadUsers());
    this.store
      .pipe(
        select(fromRoot.getUsers),
        takeWhile((x) => this.isSubscribe)
      )
      .subscribe((users) => {
        this.dataSource.data = users;
      });
  }

  ngOnDestroy(): void {
    this.isSubscribe = false;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDeleteClick(id: number): void {
    this.alertService.confirm('Really want delete user?', () => {
      this.store.dispatch(UsersActions.deleteUser({ id }));
    });
  }
}
