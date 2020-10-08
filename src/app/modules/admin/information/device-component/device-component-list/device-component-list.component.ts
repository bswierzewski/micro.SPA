import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AlertService, DeviceComponentInformationService } from 'src/app/core/services';
import { DeviceComponent } from 'src/app/shared/models';

@Component({
  selector: 'app-device-component-list',
  templateUrl: './device-component-list.component.html',
  styleUrls: ['./device-component-list.component.scss'],
})
export class DeviceComponentListComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'category', 'actions'];
  dataSource = new MatTableDataSource<DeviceComponent>();

  constructor(private componentsService: DeviceComponentInformationService, private alertService: AlertService) {
    this.loadComponents();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadComponents(): void {
    this.componentsService.getDeviceComponents().subscribe(
      (next) => {
        this.dataSource.data = next;
      },
      (error) => {
        this.alertService.error(error);
      }
    );
  }

  deleteComponent(id: number): void {
    this.alertService.confirm('Are you sure?', () => {
      this.componentsService.removeDeviceComponent(id).subscribe(
        (next) => {
          this.alertService.success(`Component deleted`);
          this.loadComponents();
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    });
  }
}
