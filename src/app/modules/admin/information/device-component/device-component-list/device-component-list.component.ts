import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AlertService, DeviceComponentInformationService } from 'src/app/core/services';
import { DeviceComponent } from 'src/app/shared/models';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../../store/app.reducer';
import * as ComponentsActions from '../../../../../store/actions/component.actions';

@Component({
  selector: 'app-device-component-list',
  templateUrl: './device-component-list.component.html',
  styleUrls: ['./device-component-list.component.scss'],
})
export class DeviceComponentListComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['position', 'name', 'category', 'actions'];
  isLoading$: Observable<boolean>;
  dataSource = new MatTableDataSource<DeviceComponent>();

  constructor(
    private store: Store<fromRoot.State>,
    private componentsService: DeviceComponentInformationService,
    private alertService: AlertService
  ) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.store.select(fromRoot.getComponents).subscribe((data) => {
      this.dataSource.data = data;
    });
    this.isLoading$ = this.store.select(fromRoot.getIsLoadingComponents);
    this.store.dispatch(ComponentsActions.loadComponents());
  }

  deleteComponent(id: number): void {
    this.alertService.confirm('Are you sure?', () => {
      this.store.dispatch(ComponentsActions.deleteComponent({ id }));
    });
  }
}
