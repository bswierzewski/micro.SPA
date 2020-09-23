import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService, CategoryInformationService, DeviceComponentInformationService } from 'src/app/core/_services';
import { DeviceComponent } from 'src/app/shared/models';

export class Model {
  id = 0;
  name = '';
  icon = '';
  componentIndexes: number[] = [];
  isExpanded = false;
}

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit {
  components$: Observable<DeviceComponent[]>;
  model = new Model();

  constructor(
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryInformationService,
    private componentService: DeviceComponentInformationService
  ) {
    route.params.subscribe((params) => {
      if (params.id === 0) {
      } else {
      }
    });
    this.components$ = componentService.getDeviceComponents();
  }

  ngOnInit(): void {}
}
