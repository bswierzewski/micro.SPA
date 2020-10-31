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
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
})
export class RoleListComponent implements OnInit, OnDestroy, AfterViewInit {
  displayColumns: string[] = ['action', 'id', 'role'];

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
}
