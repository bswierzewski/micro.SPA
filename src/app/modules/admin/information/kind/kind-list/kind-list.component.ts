import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AlertService, KindInformationService } from 'src/app/core/services';
import { Kind } from 'src/app/shared/models';

@Component({
  selector: 'app-kind-list',
  templateUrl: './kind-list.component.html',
  styleUrls: ['./kind-list.component.scss'],
})
export class KindListComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'actions'];
  dataSource = new MatTableDataSource<Kind>();

  constructor(private kindService: KindInformationService, private alertService: AlertService) {
    this.loadKinds();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadKinds(): void {
    this.kindService.getKinds().subscribe(
      (next) => {
        this.dataSource.data = next;
      },
      (error) => {
        this.alertService.error(error);
      }
    );
  }

  deleteKind(id: number): void {
    this.alertService.confirm('Are you sure?', () => {
      this.kindService.removeKind(id).subscribe(
        (next) => {
          this.alertService.success(`Kind deleted`);
          this.loadKinds();
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    });
  }
}
