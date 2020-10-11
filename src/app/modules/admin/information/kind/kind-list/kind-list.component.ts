import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { AlertService, KindInformationService } from 'src/app/core/services';
import { Kind } from 'src/app/shared/models';
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

  constructor(
    private store: Store<fromRoot.State>,
    private kindService: KindInformationService,
    private alertService: AlertService
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.store.select(fromRoot.getKinds).subscribe((kinds) => {
      this.dataSource.data = kinds;
    });
    this.isLoading$ = this.store.select(fromRoot.getIsLoadingKinds);
    this.store.dispatch(KindActions.loadKinds());
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  deleteKind(id: number): void {
    this.alertService.confirm('Are you sure?', () => {
      this.kindService.removeKind(id).subscribe(
        (next) => {
          this.alertService.success(`Kind deleted`);
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    });
  }
}
