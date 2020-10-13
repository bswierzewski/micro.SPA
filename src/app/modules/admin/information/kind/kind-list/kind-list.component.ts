import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AlertService } from 'src/app/core/services';
import { Kind } from 'src/app/shared/models';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../../store/app.reducer';
import * as KindActions from '../../../../../store/actions/kind.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-kind-list',
  templateUrl: './kind-list.component.html',
  styleUrls: ['./kind-list.component.scss'],
})
export class KindListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'actions'];
  isLoading$: Observable<boolean>;
  dataSource = new MatTableDataSource<Kind>();

  constructor(private store: Store<fromRoot.State>, private alertService: AlertService) {}

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  ngOnInit(): void {
    this.store.dispatch(KindActions.loadKinds());
    this.isLoading$ = this.store.select(fromRoot.getIsLoadingKind);
    this.store.select(fromRoot.getKinds).subscribe((kinds) => {
      this.dataSource.data = kinds;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  deleteKind(id: number): void {
    this.alertService.confirm('Are you sure?', () => {
      this.store.dispatch(KindActions.deleteKind({ id }));
    });
  }
}
